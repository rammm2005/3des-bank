import { Shield, Lock, Database, Users, FileText, Settings, ArrowRight, CheckCircle, Unlock } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SecureBank 3DES</h1>
                <p className="text-sm text-gray-600">Mainframe Banking System</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Production Ready
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Studi Kasus: Triple Data Encryption Standard
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sistem Perbankan
              <span className="text-blue-600 block">3DES Encryption</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Implementasi lengkap sistem enkripsi 3DES untuk keamanan data perbankan mainframe dengan Next.js App
              Router, environment variables, dan antarmuka modern.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Next.js 15 App Router</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">3DES Encryption</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">shadcn/ui Components</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Environment Variables</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitur Utama Sistem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sistem perbankan dengan enkripsi 3DES yang aman dan mudah digunakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-blue-100 rounded-lg w-fit group-hover:bg-blue-200 transition-colors">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Enkripsi 3DES</CardTitle>
                <CardDescription>
                  Implementasi Triple Data Encryption Standard untuk keamanan data maksimal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    168-bit key encryption
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    CBC mode dengan IV
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Environment variables
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-green-100 rounded-lg w-fit group-hover:bg-green-200 transition-colors">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Mainframe Integration</CardTitle>
                <CardDescription>Koneksi seamless dengan sistem mainframe perbankan legacy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    COBOL compatibility
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Real-time processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Transaction logging
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-purple-100 rounded-lg w-fit group-hover:bg-purple-200 transition-colors">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">User Management</CardTitle>
                <CardDescription>Sistem manajemen pengguna dengan role-based access control</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Multi-level authentication
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Session management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Audit trails
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-orange-100 rounded-lg w-fit group-hover:bg-orange-200 transition-colors">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Transaction Processing</CardTitle>
                <CardDescription>Pemrosesan transaksi perbankan dengan enkripsi end-to-end</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Real-time validation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Encrypted data transfer
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Rollback capability
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-red-100 rounded-lg w-fit group-hover:bg-red-200 transition-colors">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Security Monitoring</CardTitle>
                <CardDescription>Monitoring keamanan real-time dengan alert system</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Intrusion detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Failed attempt tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Compliance reporting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-indigo-100 rounded-lg w-fit group-hover:bg-indigo-200 transition-colors">
                  <Settings className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">System Configuration</CardTitle>
                <CardDescription>Konfigurasi sistem yang fleksibel dan mudah dikelola</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Environment management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Key rotation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Performance tuning
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mulai Eksplorasi</h2>
            <p className="text-gray-600">Pilih modul yang ingin Anda jelajahi dalam sistem 3DES Banking</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Lock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Demo Enkripsi</CardTitle>
                      <CardDescription>Test enkripsi dan dekripsi 3DES</CardDescription>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Coba fitur enkripsi 3DES dengan data sample dan lihat bagaimana sistem mengamankan informasi sensitif.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/demo/encryption">Mulai Demo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-purple-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-600 rounded-lg">
                      <Unlock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Dekripsi Data</CardTitle>
                      <CardDescription>Dekripsi data terenkripsi 3DES</CardDescription>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Dekripsi data yang telah dienkripsi dengan 3DES, validasi format, dan batch processing.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
                  asChild
                >
                  <Link href="/demo/decryption">Mulai Dekripsi</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-green-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-600 rounded-lg">
                      <Database className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Simulasi Transaksi</CardTitle>
                      <CardDescription>Simulasi transaksi perbankan</CardDescription>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Jalankan simulasi transaksi perbankan dengan enkripsi 3DES dan lihat proses end-to-end.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                  asChild
                >
                  <Link href="/demo/transaction">Mulai Simulasi</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Spesifikasi Teknis</h2>
            <p className="text-gray-600">Detail implementasi dan teknologi yang digunakan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Frontend Stack</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Next.js 15 App Router</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">React 18 dengan TypeScript</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">shadcn/ui Components</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Lucide React Icons</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Security & Backend</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">3DES Encryption (168-bit)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">CBC Mode dengan IV</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Environment Variables</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Server Actions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">API Routes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">SecureBank 3DES</h3>
                  <p className="text-gray-400 text-sm">Mainframe Banking System</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Sistem perbankan dengan enkripsi 3DES untuk keamanan data maksimal dalam lingkungan mainframe.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Fitur Utama</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Triple DES Encryption</li>
                <li>• Mainframe Integration</li>
                <li>• Real-time Processing</li>
                <li>• Security Monitoring</li>
                <li>• Transaction Management</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Teknologi</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Next.js App Router</li>
                <li>• TypeScript</li>
                <li>• shadcn/ui</li>
                <li>• Tailwind CSS</li>
                <li>• pnpm Package Manager</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 SecureBank 3DES System. Studi Kasus Implementasi Triple Data Encryption Standard.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
