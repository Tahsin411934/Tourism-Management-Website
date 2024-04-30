

const Faq = () => {
    return (
        <div>
            <section className="bg-gray-800 mt-10 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-2xl font-bold leading-none text-center sm:text-2xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 dark:divide-gray-300">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How can I create a trip on ShareTrip?</summary>
                            <div className="px-4 pb-4">
                                <p>To create a trip on ShareTrip, simply sign up for an account and log in. Then, navigate to the "Create Trip" section where you can fill out the necessary details such as destination, dates, activities, and any other relevant information about your trip. Once you've completed all the fields, click on the "Create Trip" button to publish your trip to the ShareTrip community.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How can I join a trip on ShareTrip?</summary>
                            <div className="px-4 pb-4">
                                <p>Joining a trip on ShareTrip is easy! Simply browse through the available trips listed on the platform and find one that interests you. Once you've found a trip you'd like to join, click on the "Join Trip" button and follow the prompts to complete the booking process. Make sure to review the trip details carefully before joining to ensure it aligns with your preferences and schedule.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How does the payment process work on ShareTrip?</summary>
                            <div className="px-4 pb-4">
                                <p>The payment process on ShareTrip is secure and convenient. When you join a trip, you'll be prompted to make a payment to confirm your reservation. ShareTrip accepts various payment methods, including credit/debit cards, PayPal, and bank transfers. Once your payment is successfully processed, you'll receive a confirmation email with all the details of your booking.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Can I customize my trip itinerary on ShareTrip?</summary>
                            <div className="px-4 pb-4">
                                <p>Yes, you can customize your trip itinerary on ShareTrip to suit your preferences and interests. After joining a trip, you'll have the option to communicate with the trip organizer and discuss any specific activities or destinations you'd like to include in your itinerary. The trip organizer will work with you to create a customized plan that meets your needs and ensures an unforgettable travel experience.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What safety measures are in place on ShareTrip?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>At ShareTrip, your safety and well-being are our top priorities. We take various measures to ensure a safe and enjoyable travel experience for all our users:</p>
                                <ul className="list-disc list-inside">
                                    <li>Verification of trip organizers and participants</li>
                                    <li>Secure payment processing</li>
                                    <li>24/7 customer support</li>
                                    <li>Comprehensive trip insurance options</li>
                                    <li>Regular updates and alerts on travel advisories</li>
                                </ul>
                                <p>Additionally, we encourage all users to adhere to local laws and regulations, follow recommended health and safety guidelines, and exercise caution while traveling to unfamiliar destinations.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
