// "use client";
// import React from 'react';
// import LogoImg from '@/../public/assets/images/logo.svg';
// import Link from "next/link";
// import Image from "next/image";
//
// const BlogPageFooter = () => {
//     const currentYear = new Date().getFullYear();
//     return (
//         <>
//             <section id="footer-section" className="bg-[#F4F4F4]">
//                 <div className="container pt-4">
//                     <footer>
//                         {/* Copyright */}
//                         <div className="copyright md:flex justify-between pt-4 mt-10">
//                             <li className="flex md:hidden hover:text-primary pt-2 pb-3">
//                                 <Link href='/' className='flex items-center gap-1'>
//                                     <Image src={LogoImg} className="w-4" alt="LogoImg"/>
//                                     <h4 className="text-black">nosres</h4>
//                                 </Link>
//                             </li>
//                             <div className="left">
//                                 <ul className="block space-y-2 sm:space-y-0 sm:flex items-center gap-4 text-gray-500 text-[12px]">
//                                     <li className="hidden md:flex hover:text-primary">
//                                         <Link href='/' className='flex items-center gap-1'>
//                                             <Image src={LogoImg} className="w-4" alt="LogoImg"/>
//                                             <h4 className="text-black">nosres</h4>
//                                         </Link>
//                                     </li>
//                                     <li className="hover:text-primary">
//                                         <Link href='#'>About Nosres</Link>
//                                     </li>
//                                     <li className="hover:text-primary">
//                                         <Link href='#'>Terms</Link>
//                                     </li>
//                                     <li className="hover:text-primary">
//                                         <Link href='#'>Privacy</Link>
//                                     </li>
//                                     <li className="hover:text-primary">
//                                         <Link href='#'>Careers</Link>
//                                     </li>
//                                     <li className="hover:text-primary">
//                                         <Link href='#'>Nosres Support</Link>
//                                     </li>
//                                     <li className="hover:text-primary">
//                                         <Link href='#'>Sitemap</Link>
//                                     </li>
//                                 </ul>
//
//                                 <h4 className="mt-[14px] text-gray-500 text-[12px]">© {currentYear} Nosres Inc. All
//                                     rights
//                                     reserved.</h4>
//                             </div>
//                             <div className="right mt-2 md:mt-0">
//                                 <h4 className="cursor-pointer text-gray-500 text-[12px]">United States</h4>
//                             </div>
//                         </div>
//                     </footer>
//                 </div>
//             </section>
//         </>
//     );
// };
//
// export default BlogPageFooter;