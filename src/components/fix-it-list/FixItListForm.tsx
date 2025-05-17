
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';

// Define form schema with zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  businessName: z.string().min(2, { message: "Business name is required" }),
  websiteUrl: z.string().url({ message: "Please enter a valid URL" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  websiteWorry: z.string().optional(),
});

export type FixItListFormData = z.infer<typeof formSchema>;

interface FixItListFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  isSubmitting: boolean;
}

const FixItListForm: React.FC<FixItListFormProps> = ({ onSubmit, isSubmitting }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      websiteUrl: "",
      email: "",
      websiteWorry: "",
    },
  });

  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                  </FormControl>
                  <FormMessage className="dark:text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your business name" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                  </FormControl>
                  <FormMessage className="dark:text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="websiteUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Website URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://your-website.com" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                  </FormControl>
                  <FormMessage className="dark:text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Best Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your-email@example.com" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                  </FormControl>
                  <FormMessage className="dark:text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="websiteWorry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">What's your biggest website worry? (optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us what concerns you most about your current website..."
                      className="min-h-[100px] dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="dark:text-red-400" />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-brandBlue hover:bg-brandBlue/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Analysing your site..." : "Check My Website"}
            </Button>
            
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              We respect your privacy and will never share your information with third parties.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FixItListForm;
