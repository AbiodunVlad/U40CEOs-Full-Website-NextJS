import Image from "next/image";
import React, {useState} from "react";
import Paystack from '@paystack/inline-js'
import { initializeTransaction, verifyTransaction } from "../../../pages/api/pay";

type Category = "Bronze" | "Gold" | "Platinum";

interface MembershipResultProps {
  category: Category;
  setActiveHeader: (header: string) => void;
}

export default function MembershipResult({
  category,
  setActiveHeader,
}: MembershipResultProps) {
  const images: Record<Category, string> = {
    Bronze: "/images/bronzeCategory.svg",
    Gold: "/images/bronzeCategory.svg",
    Platinum: "/images/bronzeCategory.svg",
  };
  
  const [paystackAccessCode, setPaystackAccessCode] = useState('');
  
  const popup = new Paystack();
  
  
  const amount = '150';
  
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  
    const makePayment = async () => {
      setLoading(true);
      setError("");
  
      // mitevo9094@myweblaw.com
      // qwertyui
  
      try {
        // const makePaymentResponse = await initializeTransaction(amount);
        
        popup.newTransaction({
          key: 'pk_test_f54e9851e556013c11a4f3b69d21e50d6730ef93',
          email: 'javiel424@knleeowdg.com',
          amount: 400,
          onSuccess: (transaction) => {
            console.log('transaction success');
            console.log(transaction);
            
            // const transactionResult = await verifyTransaction(transaction, 'PLATINUM', 365);
            // console.log('transactionResult', transactionResult?.data);
          },
          onLoad: (response) => {
            console.log('transaction loading');
            
            console.log("onLoad: ", response);
          },
          onCancel: () => {
            console.log('transaction cancelled');
            
            console.log("onCancel");
          },
          onError: (error) => {
            console.log('transaction error');
            
            console.log("Error: ", error.message);
          }
        })
  
        // console.log("makePayment response", makePaymentResponse);
  
        if (true) {
  
          // console.log('success 2', makePaymentResponse?.data?.data?.access_code);
          // setPaystackAccessCode(makePaymentResponse?.data?.data?.access_code);
          // const paymentResult = popup.resumeTransaction(makePaymentResponse?.data?.data?.access_code);
          // console.log('paymentResult', paymentResult);
          
          // const status = paymentResult.getStatus();
          
        // console.log('payment status', status);
          
          
          // const paymentStatus = popup.status;
          // console.log("Payment Status:", paymentStatus);
          
          // setTimeout(async () => {
          //   const transactionResult = await verifyTransaction(makePaymentResponse?.data?.data?.reference, 'PLATINUM', 365);
          //   console.log('transactionResult', transactionResult?.data);
          // }, 15000);
          

          
                if (true) {
              
            // const checkStatus = setInterval(() => {
            //      const transactionResult = verifyTransaction(makePaymentResponse?.data?.data?.reference, 'PLATINUM', '365');
            //      console.log('transactionResult', transactionResult);
                 
                 
                 
               
        
                // if (paymentStatus === "success") {
                //     clearInterval(checkStatus);
                //     console.log("Transaction Successful:", paymentStatus);
                //     // Take necessary steps for a successful transaction
                // } else if (
                //   paymentStatus === "error" ||
                //   paymentStatus === "abandoned" ||
                //   paymentStatus === "failed"
                // ) {
                //     clearInterval(checkStatus);
                //     console.log("Transaction Failed or Cancelled:", paymentStatus);
                //     // Handle failed or cancelled transaction
                // }
            // }, 5000); // Poll every 5 second
        }
          
          // Attach global callbacks for the popup events
          
              // onSucess: () => {}
            // callback: function (response) {
            //   // Handle successful transaction here
            //   console.log("Transaction successful. Reference:", response.reference);
          
            //   // Take other necessary steps
            //   // For example, call your server to verify the transaction
            //   verifyTransaction(makePaymentResponse?.data?.data?.reference, 'PLATINUM', '365');
            // },
            // onClose: function () {
            //   console.log("Transaction popup closed.");
            //   // Handle case when the user closes the popup
            // },
          
    
          
  
          
        } else {
          console.log('payment else')
          // console.log("payment unsuccessful", makePaymentResponse);
          // setError(makePaymentResponse?.message);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    
    
  return (
    <div className="flex flex-col items-center w-full px-3 sm:px-20">
      <p className="text-gray-500 text-center text-base sm:text-2xl w-full mb-5 sm:mb-10">
        The form below helps us to know more about your business and to suggest
        the best membership category that will suite you.
      </p>

      <div className="flex flex-row items-center justify-center gap-5 w-full mb-5 sm:mb-10">
        <Image
          src={images[category]}
          alt={`${category} category`}
          width={30}
          height={30}
          className="w-28 sm:w-56"
        />

        <h1 className="bg-gradient-to-r from-red-500 to-violet-600 bg-clip-text text-transparent text-lg sm:text-2xl font-bold">
          {category.toUpperCase()} CATEGORY
        </h1>
      </div>
      
      {/* <button
        className="w-1/2 py-3 text-white text-sm sm:text-lg bg-purple-500 rounded-full text-center"
        // onClick={() => window.location.reload()}
        onClick={() => setActiveHeader("Become Member")}
      >
        RE-EVALUATE
      </button> */}

      <div className="w-full flex flex-row items-center justify-center gap-10">
        <button
          // className="w-1/2 py-3 text-white text-sm sm:text-lg bg-purple-500 rounded-full text-center"
          // onClick={() => window.location.reload()}
          onClick={() => setActiveHeader("Become Member")}
          className="w-1/2 py-3 text-purple-500 border border-purple-500 text-sm sm:text-lg bg-white rounded-full text-center"
        >
          RE-EVALUATE
        </button>
        <button onClick={makePayment} className="w-1/2 py-3 text-white text-sm sm:text-lg bg-purple-500 rounded-full text-center">
          MAKE PAYMENT
        </button>
      </div>
    </div>
  );
}
