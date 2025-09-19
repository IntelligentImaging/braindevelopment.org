import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // required for Netlify when posting with fetch instead of default form submit
  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {};
    formData.forEach((v, k) => (payload[k] = String(v)));

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Contact & Collaboration</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaborating or learning more about our research? We welcome partnerships
            with clinicians, researchers, and institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Research Lab Information</CardTitle>
                <CardDescription>Get in touch with our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">
                      University of California, Irvine
                      <br />
                      Irvine, CA 92697
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground text-sm">GRP-contactimagine@hs[dot]uci[dot]edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground text-sm">(949)824-3150</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Collaboration Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Clinical partnerships",
                  "Research collaborations",
                  "Technology licensing",
                  "Training programs",
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{t}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form — Netlify Forms enabled */}
          <Card className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Send us a Message</CardTitle>
              <CardDescription>We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Netlify needs these hidden inputs */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input name="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input name="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input name="email" type="email" placeholder="john.doe@example.com" required />
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Institution/Organization
                  </label>
                  <Input name="institution" placeholder="University Hospital" />
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your research interests or collaboration ideas..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="medical"
                  size="lg"
                  className="w-full mt-4"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>

                {status === "success" && (
                  <p className="text-sm text-green-400 mt-3">Thanks — your message has been sent!</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400 mt-3">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
