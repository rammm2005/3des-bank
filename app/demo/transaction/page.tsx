"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, CreditCard, Shield, CheckCircle, AlertTriangle, Clock } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export default function TransactionDemo() {
    const [formData, setFormData] = useState({
        fromAccount: "",
        toAccount: "",
        amount: "",
        transactionType: "",
    })
    const [isProcessing, setIsProcessing] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const [transactionResult, setTransactionResult] = useState<any>(null)

    const steps = ["Validasi Input", "Enkripsi Data", "Koneksi Mainframe", "Proses Transaksi", "Konfirmasi"]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsProcessing(true)
        setCurrentStep(0)
        setTransactionResult(null)

        // Simulasi proses transaksi step by step
        for (let i = 0; i < steps.length; i++) {
            setCurrentStep(i)
            await new Promise((resolve) => setTimeout(resolve, 1500))
        }

        // Simulasi hasil transaksi
        setTransactionResult({
            transactionId: "TXN" + Date.now(),
            status: "SUCCESS",
            timestamp: new Date().toISOString(),
            encryptedData: btoa(JSON.stringify(formData)).slice(0, 32) + "...3DES",
            processingTime: "2.3s",
        })

        setIsProcessing(false)
    }

    const resetForm = () => {
        setFormData({
            fromAccount: "",
            toAccount: "",
            amount: "",
            transactionType: "",
        })
        setCurrentStep(0)
        setTransactionResult(null)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
                            <div className="p-2 bg-green-600 rounded-lg">
                                <CreditCard className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-gray-900">Simulasi Transaksi</h1>
                                <p className="text-sm text-gray-600">Banking Transaction with 3DES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="mb-8">
                    <Badge className="mb-4 bg-green-100 text-green-800">Simulation Mode</Badge>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Simulasi Transaksi Perbankan</h1>
                    <p className="text-gray-600">Demonstrasi proses transaksi perbankan dengan enkripsi 3DES end-to-end.</p>
                </div>

                <Alert className="mb-8 border-green-200 bg-green-50">
                    <Shield className="h-4 w-4" />
                    <AlertDescription>
                        <strong>Keamanan:</strong> Semua data transaksi dienkripsi menggunakan 3DES sebelum dikirim ke sistem
                        mainframe untuk pemrosesan.
                    </AlertDescription>
                </Alert>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Transaction Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-green-600" />
                                Form Transaksi
                            </CardTitle>
                            <CardDescription>Masukkan detail transaksi yang akan diproses</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Label htmlFor="transaction-type">Jenis Transaksi</Label>
                                    <Select
                                        value={formData.transactionType}
                                        onValueChange={(value) => setFormData({ ...formData, transactionType: value })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Pilih jenis transaksi" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="transfer">Transfer Antar Rekening</SelectItem>
                                            <SelectItem value="payment">Pembayaran</SelectItem>
                                            <SelectItem value="withdrawal">Penarikan</SelectItem>
                                            <SelectItem value="deposit">Setoran</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="from-account">Rekening Sumber</Label>
                                    <Input
                                        id="from-account"
                                        placeholder="1234567890"
                                        value={formData.fromAccount}
                                        onChange={(e) => setFormData({ ...formData, fromAccount: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="to-account">Rekening Tujuan</Label>
                                    <Input
                                        id="to-account"
                                        placeholder="0987654321"
                                        value={formData.toAccount}
                                        onChange={(e) => setFormData({ ...formData, toAccount: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="amount">Jumlah (IDR)</Label>
                                    <Input
                                        id="amount"
                                        type="number"
                                        placeholder="1000000"
                                        value={formData.amount}
                                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={
                                        isProcessing ||
                                        !formData.transactionType ||
                                        !formData.fromAccount ||
                                        !formData.toAccount ||
                                        !formData.amount
                                    }
                                    className="w-full"
                                >
                                    {isProcessing ? "Memproses Transaksi..." : "Proses Transaksi"}
                                </Button>

                                {transactionResult && (
                                    <Button type="button" variant="outline" onClick={resetForm} className="w-full">
                                        Reset Form
                                    </Button>
                                )}
                            </form>
                        </CardContent>
                    </Card>

                    {/* Processing Status */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-blue-600" />
                                Status Pemrosesan
                            </CardTitle>
                            <CardDescription>Monitor real-time proses transaksi</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {isProcessing && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Progress</span>
                                        <span className="text-sm text-gray-500">
                                            {Math.round(((currentStep + 1) / steps.length) * 100)}%
                                        </span>
                                    </div>
                                    <Progress value={((currentStep + 1) / steps.length) * 100} className="w-full" />

                                    <div className="space-y-3">
                                        {steps.map((step, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                {index < currentStep ? (
                                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                                ) : index === currentStep ? (
                                                    <div className="h-5 w-5 border-2 border-blue-600 rounded-full animate-spin border-t-transparent" />
                                                ) : (
                                                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />
                                                )}
                                                <span className={`text-sm ${index <= currentStep ? "text-gray-900" : "text-gray-500"}`}>
                                                    {step}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {transactionResult && (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 mb-4">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="font-semibold text-green-700">Transaksi Berhasil</span>
                                    </div>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Transaction ID:</span>
                                            <span className="font-mono">{transactionResult.transactionId}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Status:</span>
                                            <Badge className="bg-green-100 text-green-800">{transactionResult.status}</Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Processing Time:</span>
                                            <span>{transactionResult.processingTime}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Timestamp:</span>
                                            <span className="font-mono text-xs">
                                                {new Date(transactionResult.timestamp).toLocaleString()}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                        <Label className="text-xs text-gray-600">Encrypted Data (3DES):</Label>
                                        <p className="font-mono text-xs text-gray-800 break-all mt-1">{transactionResult.encryptedData}</p>
                                    </div>
                                </div>
                            )}

                            {!isProcessing && !transactionResult && (
                                <div className="text-center py-8 text-gray-500">
                                    <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                                    <p className="text-sm">Isi form transaksi untuk memulai simulasi</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Security Info */}
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Keamanan Transaksi</CardTitle>
                        <CardDescription>Lapisan keamanan yang diterapkan dalam proses transaksi</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-3">
                                    <Shield className="h-6 w-6 text-blue-600" />
                                </div>
                                <h4 className="font-semibold mb-2">Enkripsi 3DES</h4>
                                <p className="text-sm text-gray-600">
                                    Data transaksi dienkripsi dengan algoritma 3DES sebelum transmisi
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <h4 className="font-semibold mb-2">Validasi Real-time</h4>
                                <p className="text-sm text-gray-600">Validasi saldo dan rekening dilakukan secara real-time</p>
                            </div>
                            <div className="text-center">
                                <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-3">
                                    <Clock className="h-6 w-6 text-purple-600" />
                                </div>
                                <h4 className="font-semibold mb-2">Audit Trail</h4>
                                <p className="text-sm text-gray-600">Setiap transaksi dicatat dengan timestamp dan ID unik</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
