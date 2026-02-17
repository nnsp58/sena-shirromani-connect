import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShieldCheck, RotateCcw } from "lucide-react";

interface OTPVerificationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contactInfo?: string;
  onVerify: (otp: string) => void;
  onResend: () => void;
}

const OTPVerificationModal = ({
  open,
  onOpenChange,
  contactInfo = "आपके पंजीकृत नंबर",
  onVerify,
  onResend,
}: OTPVerificationModalProps) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!open) {
      setOtp(["", "", "", "", "", ""]);
      setResendTimer(30);
      return;
    }
    const interval = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [open]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = [...otp];
    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i];
    }
    setOtp(newOtp);
    const nextEmpty = pasted.length < 6 ? pasted.length : 5;
    inputRefs.current[nextEmpty]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length === 6) {
      onVerify(code);
    }
  };

  const handleResend = () => {
    setResendTimer(30);
    onResend();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-t-4 border-t-secondary">
        <DialogHeader>
          <div className="flex justify-center mb-2">
            <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center">
              <ShieldCheck className="h-7 w-7 text-secondary" />
            </div>
          </div>
          <DialogTitle className="font-hindi text-2xl text-center">OTP सत्यापन</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <p className="font-hindi text-muted-foreground text-sm text-center">
            हमने {contactInfo} पर 6 अंकों का कोड भेजा है। कृपया नीचे दर्ज करें।
          </p>

          <div className="flex justify-center gap-2" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-11 h-13 text-center text-xl font-bold border-2 border-input rounded-lg bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/30 outline-none transition-all"
                aria-label={`OTP अंक ${index + 1}`}
              />
            ))}
          </div>

          <Button
            type="submit"
            className="w-full font-hindi font-semibold"
            disabled={otp.join("").length < 6}
          >
            सत्यापित करें
          </Button>

          <div className="text-center">
            {resendTimer > 0 ? (
              <p className="text-sm text-muted-foreground font-hindi">
                पुनः भेजें ({resendTimer} सेकंड)
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="flex items-center justify-center gap-1.5 mx-auto text-sm text-primary hover:text-secondary font-hindi font-medium transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                कोड पुनः भेजें
              </button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OTPVerificationModal;
