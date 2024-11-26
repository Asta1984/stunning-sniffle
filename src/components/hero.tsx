import { Button } from "./ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FAQSection from '@/components/faq';

  

export default function Hero() {
    return (
        <>
            <div className="md:container md:mx-auto">
            <h1 className="text-slate-300 text-4xl md:text-5xl font-bold leading-relaxed p-20">
            Trusted Multi-Chain <br /><span className="text-yellow-400 font-bold">DEX </span> 
            Platform</h1>
            <p className="text-slate-500 -mt-16 ml-20">Trade earn, and own crypto. The all-in-one multi chain DEX</p>
            <div className="flex flex-initial gap-4 mt-4 ml-20">
                <Button variant="default">Connect Wallet</Button>
                <Button variant="outline">Trade Crypto</Button>
            </div>

            </div>
            
            <div className="md:container md:mx-auto mt-8">
                <h1 className="text-slate-300 text-2xl md:text-3xl font-bold leading-relaxed p-20"
                >Why <span className="text-yellow-400 font-medium">MoonEX</span> ?</h1>
                <Table className="md:container md:justify-items-center ">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Comparison</TableHead>
                      <TableHead>Moonex</TableHead>
                      <TableHead>UNISWAP</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1. Point no 1</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2. Point no 2</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3. Point no 3</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4. Point no 4</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5. Point no 5</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
            </div>

            <div className="md:container md:justify-items-center">
                <h1 className="text-slate-300 text-2xl md:text-3xl font-bold leading-relaxed p-20" >
                    Our <span className="text-yellow-400 font-medium">Features</span>
                </h1>
                <div className="grid grid-cols-4 gap-11 w-full mb-12">
                    <Card>
                        <CardHeader>
                        <CardTitle>Cheapest TXs</CardTitle>
                        <CardDescription>Exchange popular digital currencies at cheapest possible transaction price.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                        <CardTitle>CerTIK</CardTitle>
                        <CardDescription>We are Audited by CerTIK. Certik is the leading sequrity focused ranking plateform.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                        <CardTitle>No Contract Sells</CardTitle>
                        <CardDescription>No contract sells to fund the marketing wallets.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader>
                        <CardTitle>CrossDex Support</CardTitle>
                        <CardDescription>Exchange popular digital currencies at cheapest possible transaction price.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
                <FAQSection />
            </div>
        </>

    )
}