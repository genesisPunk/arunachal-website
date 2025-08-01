import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Upload, AlertCircle, CheckCircle2 } from "lucide-react";
import NavigationBar from "@/components/NavigationBar";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Define form schema with zod
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  institution: z.string().min(2, { message: "Institution name is required." }),
  degreeType: z.string().min(1, { message: "Please select a degree type." }),
  graduationYear: z
    .string()
    .regex(/^\d{4}$/, { message: "Please enter a valid year (YYYY)." }),
  rollNumber: z.string().min(1, { message: "Roll number is required." }),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const DegreeVerification = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      institution: "",
      degreeType: "",
      graduationYear: "",
      rollNumber: "",
      additionalInfo: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileError("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Check if file is PDF
    if (selectedFile.type !== "application/pdf") {
      setFileError("Please upload a PDF file only.");
      setFile(null);
      return;
    }

    // Check file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setFileError("File size should not exceed 5MB.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const onSubmit = async (data: FormValues) => {
    if (!file) {
      setFileError("Please upload your degree certificate (PDF).");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call with timeout
    setTimeout(() => {
      console.log("Form data:", data);
      console.log("File:", file);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />

      {/* Header with Indian flag colors */}
      <div className="bg-gradient-to-b from-orange-500 via-white to-green-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#000080] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Degree Verification
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Submit your details for degree verification or upload your
            certificate for validation
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-green-500 shadow-lg">
              <CardHeader className="bg-green-50">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                  <CardTitle>Verification Request Submitted</CardTitle>
                </div>
                <CardDescription>
                  Your degree verification request has been successfully
                  submitted.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700">
                  Thank you for submitting your degree verification request. Our
                  team will review your submission and get back to you via email
                  within 5-7 working days.
                </p>
                <p className="text-gray-700 mt-4">
                  Please keep your reference number for future correspondence:{" "}
                  <span className="font-semibold">{`VER-${Date.now().toString().slice(-8)}`}</span>
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Submit Another Request
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-t-4 border-t-rose-500 shadow-lg">
              <CardHeader>
                <CardTitle>Degree Verification Form</CardTitle>
                <CardDescription>
                  Fill in your details and upload your degree certificate for
                  verification.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="institution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Institution Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="University/College Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="degreeType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Degree Type</FormLabel>
                            <FormControl>
                              <select
                                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                {...field}
                              >
                                <option value="">Select Degree Type</option>
                                <option value="bachelor">
                                  Bachelor's Degree
                                </option>
                                <option value="master">Master's Degree</option>
                                <option value="phd">PhD</option>
                                <option value="diploma">Diploma</option>
                                <option value="certificate">Certificate</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="graduationYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Graduation Year</FormLabel>
                            <FormControl>
                              <Input placeholder="YYYY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="rollNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Roll Number / Registration Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Roll/Registration Number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Additional Information (Optional)
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any additional information you'd like to provide"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-3">
                      <Label htmlFor="certificate">
                        Upload Degree Certificate (PDF only, max 5MB)
                      </Label>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="border-2 border-dashed border-gray-300 rounded-md px-6 py-8 text-center cursor-pointer hover:border-gray-400 transition-colors">
                            <input
                              id="certificate"
                              type="file"
                              accept="application/pdf"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                            <label
                              htmlFor="certificate"
                              className="cursor-pointer flex flex-col items-center"
                            >
                              <Upload className="h-8 w-8 text-gray-500 mb-2" />
                              <span className="text-sm font-medium text-gray-700">
                                {file
                                  ? file.name
                                  : "Click to upload or drag and drop"}
                              </span>
                              <span className="text-xs text-gray-500 mt-1">
                                PDF only (max 5MB)
                              </span>
                            </label>
                          </div>
                          {fileError && (
                            <p className="text-sm text-red-500 mt-2 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {fileError}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <Alert className="bg-blue-50 border-blue-200">
                      <AlertCircle className="h-4 w-4 text-blue-600" />
                      <AlertTitle className="text-blue-800">
                        Important
                      </AlertTitle>
                      <AlertDescription className="text-blue-700">
                        By submitting this form, you confirm that all
                        information provided is accurate and the uploaded
                        document is authentic.
                      </AlertDescription>
                    </Alert>

                    <Button
                      type="submit"
                      className="w-full bg-[#f43f5e] hover:bg-[#e11d48] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Submit Verification Request"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DegreeVerification;
