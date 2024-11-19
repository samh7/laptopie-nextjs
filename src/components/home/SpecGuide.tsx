// "use client";

// import { PopularCategoriesProps, specGuides } from "@/data/data";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { Badge } from "@/components/ui/badge";

// export default function SpecGuide({specs}: {specs: PopularCategoriesProps[]}) {
//   return (
//     <section className="w-full  py-12 md:py-24">
//       <div className="container px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col items-center space-y-4 text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
//             Understanding Specifications
//           </h2>
//           <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
//             Make informed decisions by understanding the key components that power your laptop
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {specGuides.map((guide, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="h-full hover:shadow-md transition-all">
//                 <CardHeader>
//                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
//                     {guide.icon}
//                   </div>
//                   <CardTitle className="text-xl">{guide.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <p className="text-sm text-muted-foreground">
//                     {guide.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {guide.items.map((item, itemIndex) => (
//                       <Badge 
//                         key={itemIndex} 
//                         variant="secondary"
//                         className="px-2.5 py-0.5 text-xs font-medium"
//                       >
//                         {item}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
