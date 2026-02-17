import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToSignup: () => void;
  onForgotPassword: () => void;
}

const LoginModal = ({ open, onOpenChange, onSwitchToSignup, onForgotPassword }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-t-4 border-t-secondary">
        <DialogHeader>
          <div className="flex justify-center mb-2">
            <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center">
              <LogIn className="h-7 w-7 text-secondary" />
            </div>
          </div>
          <DialogTitle className="font-hindi text-2xl text-center">लॉगिन करें</DialogTitle>
          <p className="font-hindi text-sm text-muted-foreground text-center">
            अपने खाते में प्रवेश करें
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="login-email" className="font-hindi">ईमेल / मोबाइल नंबर</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="login-email"
                type="text"
                placeholder="आपका ईमेल या मोबाइल नंबर"
                className="pl-10"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password" className="font-hindi">पासवर्ड</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="आपका पासवर्ड"
                className="pl-10 pr-10"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" className="rounded border-input" />
              <span className="font-hindi text-muted-foreground">याद रखें</span>
            </label>
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm text-primary hover:text-secondary font-hindi font-medium transition-colors"
            >
              पासवर्ड भूल गए?
            </button>
          </div>
          <Button type="submit" className="w-full font-hindi font-semibold">
            लॉगिन करें
          </Button>
          <div className="text-center text-sm text-muted-foreground font-hindi">
            खाता नहीं है?{" "}
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="text-primary hover:text-secondary font-semibold transition-colors"
            >
              साइन अप करें
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
