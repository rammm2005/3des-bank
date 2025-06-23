"use client"

import { useState } from "react"
import { ArrowLeft, Unlock, Download, Trash2, CheckCircle, AlertCircle, FileText } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DecryptionResult {
  id: string
  originalData: string
  decryptedData: string
  status: "success" | "error"
  timestamp: string
  processingTime: number
}

export default function DecryptionPage() {
  const [singleInput, setSingleInput] = useState("")
  const [batchInput, setBatchInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState<DecryptionResult[]>([])
  const [activeTab, setActiveTab] = useState("single")

  const validateEncryptedData = (data: string): boolean => {
    return data.includes("==3DES==") || data.length > 10
  }

  const simulateDecryption = async (encryptedData: string): Promise<DecryptionResult> => {
    const startTime = Date.now()

    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000 + 500))

    const processingTime = Date.now() - startTime

    try {
      let decryptedData = ""

      if (encryptedData.includes("==3DES==")) {
        const cleanText = encryptedData.replace("==3DES==", "")
        decryptedData = atob(cleanText.split("").reverse().join(""))
      } else {
        decryptedData = `Decrypted: ${encryptedData.slice(0, 20)}...`
      }

      return {
        id: `DEC_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        originalData: encryptedData,
        decryptedData,
        status: "success",
        timestamp: new Date().toISOString(),
        processingTime,
      }
    } catch (e: unknown) {
      return {
        id: `DEC_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        originalData: encryptedData,
        decryptedData: "Error: Invalid encrypted format",
        status: "error",
        timestamp: new Date().toISOString(),
        processingTime,
      }
    }
  }

  const handleSingleDecryption = async () => {
    if (!singleInput.trim()) return

    if (!validateEncryptedData(singleInput)) {
      alert("Format data terenkripsi tidak valid!")
      return
    }

    setIsProcessing(true)
    const result = await simulateDecryption(singleInput)
    setResults((prev) => [result, ...prev])
    setSingleInput("")
    setIsProcessing(false)
  }

  const handleBatchDecryption = async () => {
    if (!batchInput.trim()) return

    const lines = batchInput.split("\n").filter((line) => line.trim())
    if (lines.length === 0) return

    setIsProcessing(true)
    const batchResults: DecryptionResult[] = []

    for (const line of lines) {
      if (validateEncryptedData(line.trim())) {
        const result = await simulateDecryption(line.trim())
        batchResults.push(result)
      }
    }

    setResults((prev) => [...batchResults, ...prev])
    setBatchInput("")
    setIsProcessing(false)
  }

  const clearResults = () => {
    setResults([])
  }

  const exportResults = () => {
    const csvContent = [
      ["ID", "Original Data", "Decrypted Data", "Status", "Timestamp", "Processing Time (ms)"],
      ...results.map((r) => [
        r.id,
        r.originalData.substring(0, 50) + "...",
        r.decryptedData.substring(0, 50) + "...",
        r.status,
        r.timestamp,
        r.processingTime.toString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `decryption_results_${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-600 rounded-lg">
                <Unlock className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Dekripsi 3DES</h1>
                <p className="text-sm text-gray-600">Advanced Decryption Tools</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Decryption Tools</Badge>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Dekripsi Data 3DES</h1>
          <p className="text-gray-600">
            Tools lengkap untuk mendekripsi data yang telah dienkripsi dengan algoritma 3DES, mendukung single dan batch
            processing.
          </p>
        </div>

        <Alert className="mb-8 border-purple-200 bg-purple-50">
          <Unlock className="h-4 w-4" />
          <AlertDescription>
            <strong>Format Support:</strong> Sistem mendukung berbagai format data terenkripsi 3DES. Pastikan data
            memiliki format yang valid sebelum dekripsi.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Decryption Tools */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Unlock className="h-5 w-5 text-purple-600" />
                  Tools Dekripsi
                </CardTitle>
                <CardDescription>Pilih mode dekripsi sesuai kebutuhan Anda</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="single">Single Dekripsi</TabsTrigger>
                    <TabsTrigger value="batch">Batch Dekripsi</TabsTrigger>
                  </TabsList>

                  <TabsContent value="single" className="space-y-4">
                    <div>
                      <Label htmlFor="single-input">Data Terenkripsi</Label>
                      <Textarea
                        id="single-input"
                        placeholder="Paste data terenkripsi 3DES di sini..."
                        value={singleInput}
                        onChange={(e) => setSingleInput(e.target.value)}
                        rows={6}
                        className="font-mono text-sm"
                      />
                    </div>
                    <Button
                      onClick={handleSingleDecryption}
                      disabled={!singleInput.trim() || isProcessing}
                      className="w-full"
                    >
                      {isProcessing ? "Mendekripsi..." : "Dekripsi Data"}
                    </Button>
                  </TabsContent>

                  <TabsContent value="batch" className="space-y-4">
                    <div>
                      <Label htmlFor="batch-input">Multiple Data (Satu per baris)</Label>
                      <Textarea
                        id="batch-input"
                        placeholder={`Data terenkripsi 1\nData terenkripsi 2\nData terenkripsi 3\n...`}
                        value={batchInput}
                        onChange={(e) => setBatchInput(e.target.value)}
                        rows={8}
                        className="font-mono text-sm"
                      />
                    </div>
                    <Button
                      onClick={handleBatchDecryption}
                      disabled={!batchInput.trim() || isProcessing}
                      className="w-full"
                    >
                      {isProcessing ? "Memproses Batch..." : "Batch Dekripsi"}
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statistik Dekripsi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Dekripsi:</span>
                  <Badge variant="outline">{results.length}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Berhasil:</span>
                  <Badge className="bg-green-100 text-green-800">
                    {results.filter((r) => r.status === "success").length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Error:</span>
                  <Badge className="bg-red-100 text-red-800">
                    {results.filter((r) => r.status === "error").length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avg. Time:</span>
                  <span className="text-sm font-mono">
                    {results.length > 0
                      ? `${Math.round(results.reduce((acc, r) => acc + r.processingTime, 0) / results.length)}ms`
                      : "0ms"}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                  onClick={exportResults}
                  disabled={results.length === 0}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-red-600 hover:text-red-700"
                  onClick={clearResults}
                  disabled={results.length === 0}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Results
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <Link href="/demo/encryption">
                    <FileText className="h-4 w-4 mr-2" />
                    Demo Enkripsi
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Results Table */}
        {results.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Hasil Dekripsi</CardTitle>
                  <CardDescription>History dan hasil dekripsi data 3DES</CardDescription>
                </div>
                <Badge variant="outline">{results.length} results</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Data Asli</TableHead>
                      <TableHead>Hasil Dekripsi</TableHead>
                      <TableHead>Waktu</TableHead>
                      <TableHead>Processing</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.slice(0, 10).map((result) => (
                      <TableRow key={result.id}>
                        <TableCell className="font-mono text-xs">{result.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {result.status === "success" ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-red-600" />
                            )}
                            <Badge
                              className={
                                result.status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }
                            >
                              {result.status}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-[200px]">
                          <div className="truncate font-mono text-xs" title={result.originalData}>
                            {result.originalData}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-[200px]">
                          <div className="truncate text-sm" title={result.decryptedData}>
                            {result.decryptedData}
                          </div>
                        </TableCell>
                        <TableCell className="text-xs text-gray-500">
                          {new Date(result.timestamp).toLocaleString()}
                        </TableCell>
                        <TableCell className="font-mono text-xs">{result.processingTime}ms</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {results.length > 10 && (
                  <div className="text-center py-4 text-sm text-gray-500">
                    Menampilkan 10 dari {results.length} hasil. Export untuk melihat semua data.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Format Guide */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Panduan Format Data</CardTitle>
            <CardDescription>Format data terenkripsi yang didukung sistem</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-gray-900">Format Demo (dari Enkripsi Demo)</h4>
                <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm">
                  <div className="text-gray-600 mb-2">Contoh:</div>
                  <div className="break-all">SGVsbG8gV29ybGQ==3DES==</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Format ini dihasilkan dari demo enkripsi di halaman sebelumnya.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-900">Format Standar 3DES</h4>
                <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm">
                  <div className="text-gray-600 mb-2">Contoh:</div>
                  <div className="break-all">A1B2C3D4E5F6789A...</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Format hexadecimal standar untuk data terenkripsi 3DES.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
