import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Rocket, 
  ShieldCheck, 
  CreditCard, 
  Globe 
} from 'lucide-react';
import FAQSection from '@/components/faq';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Trusted Multi-Chain <br />
            <span className="text-yellow-400">DEX</span> Platform
          </h1>
          <p className="text-gray-400 text-lg">
            Trade, earn, and own crypto. The all-in-one multi-chain DEX solution.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
              Connect Wallet
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
              Trade Crypto
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="w-full max-w-md bg-gray-800 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="bg-yellow-400/20 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Rocket className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-center text-2xl font-bold mb-2 text-yellow-400">MoonEX</h2>
            <p className="text-center text-gray-300">
              Revolutionizing crypto trading with seamless, secure, and efficient multi-chain solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why <span className="text-yellow-400">MoonEX</span>?
        </h2>
        <div className="overflow-x-auto">
          <Table className="bg-gray-800 rounded-xl shadow-lg">
            <TableHeader className="bg-gray-700">
              <TableRow>
                <TableHead className="text-white">Comparison</TableHead>
                <TableHead className="text-white">MoonEX</TableHead>
                <TableHead className="text-white">UNISWAP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                "Transaction Fees",
                "Security Audit",
                "Multi-Chain Support",
                "User Experience",
                "Community Trust"
              ].map((comparison, index) => (
                <TableRow key={index} className="hover:bg-gray-700/50">
                  <TableCell>{index + 1}. {comparison}</TableCell>
                  <TableCell className="text-green-400">✓</TableCell>
                  <TableCell className="text-red-400">✗</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-yellow-400">Features</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-all group">
            <CardHeader>
              <div className="bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CreditCard className="w-8 h-8 text-yellow-400" />
              </div>
              <CardTitle className="text-white">Cheapest TXs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Exchange popular digital currencies at the lowest possible transaction price.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-all group">
            <CardHeader>
              <div className="bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-yellow-400" />
              </div>
              <CardTitle className="text-white">CerTIK Audit</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Thoroughly audited by CerTIK, the leading security-focused blockchain verification platform.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-all group">
            <CardHeader>
              <div className="bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-yellow-400" />
              </div>
              <CardTitle className="text-white">CrossDex Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Seamless cross-chain trading with support for multiple blockchain networks.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-yellow-400 transition-all group">
            <CardHeader>
              <div className="bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-yellow-400" />
              </div>
              <CardTitle className="text-white">No Contract Sells</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Transparent trading model with no hidden contract sells funding marketing wallets.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <FAQSection />
      </div>
    </div>
  );
}