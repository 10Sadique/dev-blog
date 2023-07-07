import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <main className="py-24">
      <div className="container">
        <Card className="w-full lg:w-[500px] mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="font-black lg:text-3xl mb-3 text-2xl">
              {`Let's keep in `}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
                touch
              </span>
            </CardTitle>
            <CardDescription className="text-balance">
              {`Get the latest update from us where ever you are.`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input type="text" name="name" placeholder="Name" />
              <Input type="email" name="email" placeholder="Email" />
              <Textarea name="message" placeholder="Message" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full font-semibold">Send</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default Contact;
