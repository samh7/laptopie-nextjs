// 'use client';

// import { useSession } from 'next-auth/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { toast } from 'sonner';
// import { SavedLaptop } from '@/lib/interfaces/interfaces';

// export default function RecentlyViewed() {
//   const { data: session, status } = useSession();
//   const [laptops, setLaptops] = useState<SavedLaptop[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchLaptops = async () => {
//       if (status === 'loading') return;
      
//       if (!session?.user?.id) {
//         setIsLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(`/api/laptops/history?userId=${session.user.id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch history');
//         }
//         const data = await response.json();
//         if (data.error) {
//           throw new Error(data.error);
//         }
//         setLaptops(data);
//       } catch (error) {
//         console.error('Failed to fetch laptop history:', error);
//         toast.error('Failed to load recently viewed laptops');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchLaptops();
//   }, [session, status]);

//   // Don't render anything while checking authentication
//   if (status === 'loading') {
//     return null;
//   }

//   // Don't render if not authenticated
//   if (!session) {
//     return null;
//   }

//   if (isLoading) {
//     return (
//       <div className="mt-8 max-w-7xl mx-auto px-4">
//         <div className="text-center text-gray-600">Loading history...</div>
//       </div>
//     );
//   }

//   if (laptops.length === 0) {
//     return null;
//   }

//   return (
//     <section className="mt-8 max-w-7xl mx-auto px-4">
//       <h2 className="text-2xl font-bold mb-4">Recently Viewed</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {laptops.map((laptop, index) => (
//           <Link
//             key={index}
//             href={{
//               pathname: '/home/info',
//               query: {
//                 laptop: JSON.stringify(laptop),
//                 image: laptop.imageUrl || '/laptop_brands/generic.jpg',
//                 name: laptop.name,
//                 brand: laptop.brand,
//                 price: laptop.price,
//               },
//             }}
//             className="block p-4 border rounded-lg hover:shadow-lg transition-shadow"
//           >
//             <div className="flex items-center gap-2 mb-2">
//               {laptop.brandImage && (
//                 <Image
//                   src={laptop.brandImage}
//                   alt={laptop.brand}
//                   width={24}
//                   height={24}
//                   className="object-contain"
//                 />
//               )}
//               <span className="font-semibold">{laptop.brand}</span>
//             </div>
            
//             {laptop.imageUrl ? (
//               <Image
//                 src={laptop.imageUrl}
//                 alt={laptop.name}
//                 width={200}
//                 height={200}
//                 className="object-contain mx-auto mb-2"
//               />
//             ) : (
//               <Image
//                 src="/laptop_brands/generic.jpg"
//                 alt={laptop.name}
//                 width={200}
//                 height={200}
//                 className="object-contain mx-auto mb-2"
//               />
//             )}
            
//             <h3 className="font-medium">{laptop.name}</h3>
//             <p className="text-gray-600">${laptop.price.toLocaleString()}</p>
//             <p className="text-sm text-gray-500 mt-2">
//               Viewed on {new Date(laptop.createdAt).toLocaleDateString()}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// } 