import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
// import { ProgressBar } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
// import { Badge } from "@/components/ui/badge"
import { LockIcon, KeyIcon, EyeIcon } from "lucide-react"

const Temp = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto px-4 py-12 md:px-6 lg:px-8">
    <div className="bg-card rounded-xl shadow-lg overflow-hidden">
      <div className="bg-card-foreground p-6 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Password Manager</h2>
          <Button variant="ghost" size="icon">
            <LockIcon className="w-5 h-5" />
            <span className="sr-only">Secure Password Manager</span>
          </Button>
        </div>
        <p className="text-muted-foreground mt-2">Securely store and manage all your passwords in one place.</p>
      </div>
      <div className="bg-background p-6 md:p-8 space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input id="password" type="password" placeholder="Enter password" />
            <Button variant="ghost" size="icon" className="absolute top-1/2 right-2 -translate-y-1/2">
              <EyeIcon className="w-5 h-5" />
              <span className="sr-only">Toggle password visibility</span>
            </Button>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password-strength">Password Strength</Label>
          <div className="h-3 rounded-full" />
        </div>
        <div className="flex justify-between items-center">
          <Button variant="outline">Generate Password</Button>
          <Button>Save Password</Button>
        </div>
      </div>
    </div>
    <div className="bg-card rounded-xl shadow-lg overflow-hidden">
      <div className="bg-card-foreground p-6 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Password Generator</h2>
          <Button variant="ghost" size="icon">
            <KeyIcon className="w-5 h-5" />
            <span className="sr-only">Secure Password Generator</span>
          </Button>
        </div>
        <p className="text-muted-foreground mt-2">Create strong, unique passwords with customizable settings.</p>
      </div>
      <div className="bg-background p-6 md:p-8 space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="password-length">Password Length</Label>
          <Slider id="password-length" min={8} max={32} step={1} defaultValue={[16]} className="h-2 rounded-full" />
        </div>
        <div className="grid gap-2">
          <Label>Character Types</Label>
          <div className="flex items-center gap-4">
            <Checkbox id="include-uppercase" defaultChecked />
            <Label htmlFor="include-uppercase">Uppercase</Label>
            <Checkbox id="include-lowercase" defaultChecked />
            <Label htmlFor="include-lowercase">Lowercase</Label>
            <Checkbox id="include-numbers" defaultChecked />
            <Label htmlFor="include-numbers">Numbers</Label>
            <Checkbox id="include-symbols" />
            <Label htmlFor="include-symbols">Symbols</Label>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="outline">Generate Password</Button>
          <div className="flex items-center gap-2">
            {/* <Badge variant="secondary">Strong</Badge> */}
            <Input type="text" value="Xt8@Hy2Lq" readOnly className="max-w-[150px] text-right" />
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Temp