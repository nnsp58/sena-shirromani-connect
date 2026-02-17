import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

interface ForgotPasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBackToLogin: () => void;
}

const ForgotPasswordModal = ({ open, onOpenChange, onBackToLogin }: ForgotPasswordModalProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request:", email);
    setSubmitted(true);
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setSubmitted(false);
      setEmail("");
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md border-t-4 border-t-secondary">
        <DialogHeader>
          <div className="flex justify-center mb-2">
            <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center">
              {submitted ? (
                <CheckCircle className="h-7 w-7 text-green-600" />
              ) : (
                <Mail className="h-7 w-7 text-secondary" />
              )}
            </div>
          </div>
          <DialogTitle className="font-hindi text-2xl text-center">
            {submitted ? "ईमेल भेजा गया" : "पासवर्ड भूल गए?"}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="space-y-4 mt-2 text-center">
            <p className="font-hindi text-muted-foreground text-sm">
              यदि आपका खाता मौजूद है, तो हमने <strong>{email}</strong> पर पासवर्ड रीसेट लिंक भेजा है। कृपया अपना ईमेल जांचें।
            </p>
            <Button
              onClick={() => {
                handleClose(false);
                onBackToLogin();
              }}
              className="w-full font-hindi font-semibold"
            >
              लॉगिन पर वापस जाएं
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <p className="font-hindi text-muted-foreground text-sm text-center">
              अपना पंजीकृत ईमेल दर्ज करें। हम आपको पासवर्ड रीसेट लिंक भेजेंगे।
            </p>
            <div className="space-y-2">
              <Label htmlFor="reset-email" className="font-hindi">ईमेल पता</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="reset-email"
                  type="email"
                  placeholder="आपका पंजीकृत ईमेल"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full font-hindi font-semibold">
              रीसेट लिंक भेजें
            </Button>
            <button
              type="button"
              onClick={() => {
                handleClose(false);
                onBackToLogin();
              }}
              className="w-full flex items-center justify-center gap-2 text-sm text-primary hover:text-secondary font-hindi transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              लॉगिन पर वापस जाएं
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
