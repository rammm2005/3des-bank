"use client"

import { useState } from "react"
import { ArrowLeft, Lock, Unlock, Copy, CheckCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function EncryptionDemo() {
    const [inputText, setInputText] = useState("")
    const [encryptedText, setEncryptedText] = useState("")
    const [decryptedText, setDecryptedText] = useState("")
    const [isProcessing, setIsProcessing] = useState(false)
    const [copied, setCopied] = useState(false)

    const handleEncrypt = async () => {
        if (!inputText.trim()) return

        setIsProcessing(true)
        // Simulasi proses enkripsi
        setTimeout(() => {
            const mockEncrypted = btoa(inputText).split("").reverse().join("") + "==3DES=="
            setEncryptedText(mockEncrypted)
            setIsProcessing(false)
        }, 1000)
    }

    const handleDecrypt = async () => {
        if (!encryptedText.trim()) return

        setIsProcessing(true)
        // Simulasi proses dekripsi
        setTimeout(() => {
            try {
                const cleanText = encryptedText.replace("==3DES==", "")
                const decoded = atob(cleanText.split("").reverse().join(""))
                setDecryptedText(decoded)
            } catch {
                setDecryptedText("Error: Invalid encrypted text")
            }
            setIsProcessing(false)
        }, 1000)
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
                            <div className="p-2 bg-blue-600 rounded-lg">
                                <Lock className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-gray-900">Demo Enkripsi 3DES</h1>
                                <p className="text-sm text-gray-600">Triple Data Encryption Standard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">
                    <Badge className="mb-4 bg-blue-100 text-blue-800">Demo Mode</Badge>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Enkripsi & Dekripsi 3DES</h1>
                    <p className="text-gray-600">
                        Demonstrasi cara kerja Triple Data Encryption Standard dalam mengamankan data perbankan.
                    </p>
                </div>

                <Alert className="mb-8 border-blue-200 bg-blue-50">
                    <Lock className="h-4 w-4" />
                    <AlertDescription>
                        <strong>Catatan:</strong> Ini adalah simulasi untuk tujuan demonstrasi. Dalam implementasi nyata, enkripsi
                        3DES menggunakan key dan IV yang aman dari environment variables.
                    </AlertDescription>
                </Alert>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Input & Encryption */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Lock className="h-5 w-5 text-blue-600" />
                                Enkripsi Data
                            </CardTitle>
                            <CardDescription>Masukkan data yang akan dienkripsi menggunakan 3DES</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="input-text">Data Input</Label>
                                <Textarea
                                    id="input-text"
                                    placeholder="Masukkan data yang akan dienkripsi..."
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    rows={4}
                                />
                            </div>

                            <Button onClick={handleEncrypt} disabled={!inputText.trim() || isProcessing} className="w-full">
                                {isProcessing ? "Mengenkripsi..." : "Enkripsi dengan 3DES"}
                            </Button>

                            {encryptedText && (
                                <div className="space-y-2">
                                    <Label>Hasil Enkripsi</Label>
                                    <div className="relative">
                                        <Textarea value={encryptedText} readOnly rows={3} className="font-mono text-sm bg-gray-50" />
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="absolute top-2 right-2"
                                            onClick={() => copyToClipboard(encryptedText)}
                                        >
                                            {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="absolute top-2 right-12 bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
                                            asChild
                                        >
                                            <Link href="/demo/decryption">Dekripsi</Link>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Decryption */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Unlock className="h-5 w-5 text-green-600" />
                                Dekripsi Data
                            </CardTitle>
                            <CardDescription>Dekripsi data terenkripsi kembali ke bentuk asli</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="encrypted-input">Data Terenkripsi</Label>
                                <Textarea
                                    id="encrypted-input"
                                    placeholder="Paste data terenkripsi di sini..."
                                    value={encryptedText}
                                    onChange={(e) => setEncryptedText(e.target.value)}
                                    rows={4}
                                    className="font-mono text-sm"
                                />
                            </div>

                            <Button
                                onClick={handleDecrypt}
                                disabled={!encryptedText.trim() || isProcessing}
                                className="w-full"
                                variant="outline"
                            >
                                {isProcessing ? "Mendekripsi..." : "Dekripsi dengan 3DES"}
                            </Button>

                            {decryptedText && (
                                <div className="space-y-2">
                                    <Label>Hasil Dekripsi</Label>
                                    <Textarea value={decryptedText} readOnly rows={3} className="bg-green-50 border-green-200" />
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Technical Info */}
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Informasi Teknis 3DES</CardTitle>
                        <CardDescription>Detail implementasi Triple Data Encryption Standard</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-3 text-gray-900">Spesifikasi Algoritma</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>
                                        • <strong>Key Length:</strong> 168-bit (3 × 56-bit keys)
                                    </li>
                                    <li>
                                        • <strong>Block Size:</strong> 64-bit
                                    </li>
                                    <li>
                                        • <strong>Mode:</strong> CBC (Cipher Block Chaining)
                                    </li>
                                    <li>
                                        • <strong>Padding:</strong> PKCS#7
                                    </li>
                                    <li>
                                        • <strong>IV:</strong> 64-bit Initialization Vector
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3 text-gray-900">Keamanan</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>
                                        • <strong>Strength:</strong> 112-bit effective security
                                    </li>
                                    <li>
                                        • <strong>Standard:</strong> FIPS 46-3, ANSI X9.52
                                    </li>
                                    <li>
                                        • <strong>Usage:</strong> Legacy banking systems
                                    </li>
                                    <li>
                                        • <strong>Status:</strong> Deprecated for new systems
                                    </li>
                                    <li>
                                        • <strong>Replacement:</strong> AES recommended
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
