
export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Brad Justin",
              role: "Software Developer",
              text: "I highly recommend Laptopie. As a developer, I was having challenges choosing between laptop specifications but Laptopie helped me.",
            },
            {
              name: "Edith Cooper",
              role: "Video Editor",
              text: "The recommendations are so accurate. I have been using the laptop for my video editing tasks for about 3 years now and it's still a beast. Laptopie is the best.",
            },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-white rounded-xl border border-gray-100"
            >
              <div className="text-4xl text-blue-600 mb-4">"</div>
              <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
