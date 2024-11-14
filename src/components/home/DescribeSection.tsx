import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { BiPencil, BiLoaderCircle } from "react-icons/bi";
import { motion } from "framer-motion";
// import { default } from '../../../tailwind.config';

interface InputOptionProps {
  describe: () => void;
  submitName: string;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}

export default function DescribeSection({
  describe,
  submitName,
  textAreaRef,
}: InputOptionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto"
    >
      <Card>
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <BiPencil className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Describe Your Needs</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            ref={textAreaRef}
            className="min-h-[200px] resize-none"
            placeholder="Tell us about your ideal laptop. Consider mentioning:
• Your intended use (gaming, work, study, etc.)
• Preferred features (screen size, battery life, etc.)
• Any specific requirements (budget, portability, etc.)
• Performance needs (light browsing or heavy multitasking)"
            maxLength={350}
          />
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Maximum 350 characters
            </p>
            <Button
              onClick={describe}
              className="min-w-[100px]"
              disabled={submitName === ""}
            >
              {submitName === "" ? (
                <BiLoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                submitName
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
