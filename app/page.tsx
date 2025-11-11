"use client"
import Image from "next/image";
import pp from "@/public/pp.jpg";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import image1 from "../public/1.png"
import image2 from "../public/2.jpg"
import image3 from "../public/3.png"
import image4 from "../public/4.png"
import image5 from "../public/5.png"
import image6 from "../public/6.jpg"


export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-2xl px-4 py-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={pp}
              alt="Profile Picture"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            />
          </div>
          <ThemeToggle />
        </motion.header>

        {/* Main Content */}
        <main className="space-y-16">
          {/* Intro Section */}
          <section className="space-y-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-bold text-blue-600 inline-block">Lebin Timsina</h1>
              <p className="text-gray-600 dark:text-gray-400">UI/UX Designer and Front-end Developer</p>
              <p className="text-gray-600 dark:text-gray-400">Kathmandu, Nepal</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-semibold">Building Scalable Solutions for Tomorrow</h2>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                Passionate about creating engaging and user-friendly interfaces with expertise in{" "}
                <span className="text-black dark:text-white font-medium hover:text-rose-400 dark:hover:text-rose-400 transition-colors duration-300">UI/UX Design</span>,{" "}
                <span className="text-black dark:text-white font-medium hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300">Front-End Development</span>,{" "}
                <span className="text-black dark:text-white font-medium hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300">Responsive Design</span>, and{" "}
                <span className="text-black dark:text-white font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Prototyping</span>.
              </p>

              <p className="text-gray-600 text-sm dark:text-gray-400">
                I specialize in crafting visually appealing and user-centered digital experiences that blend creativity with functionality. 
                My focus is on building clean, responsive interfaces that not only look great but also provide smooth and intuitive user interactions. 
                I enjoy transforming ideas into engaging products through a balance of design thinking and front-end development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mt-4"
            >
              <Button className="rounded-full bg-linear-to-r from-rose-400 to-indigo-600 text-white font-medium px-6 py-2 transition-all duration-300 hover:from-indigo-600 hover:to-rose-400 hover:scale-105 shadow-md">
                Resume
              </Button>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                <FaGithub className="w-6 h-6"/>
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                <FaLinkedin className="w-6 h-6"/>
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                <FaTwitter className="w-6 h-6"/>
              </Link>
            </motion.div>
          </section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-semibold">Experience</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <p className="text-gray-600 dark:text-gray-400 text-sm">July, 2024 - Present</p>
                <p className="font-medium">UI/UX Designer</p>
                <p className="text-blue-600 dark:text-blue-400">Company X</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel felis ac lorem placerat pretium. UI/UX Design sed risus eu nulla convallis, non tincidunt augue cursus. Cras sagittis nisi ut purus aliquet, sed facilisis velit dictum. Aenean et elit metus. Sed malesuada, arcu sit amet fermentum laoreet, mauris orci cursus elit, sed luctus Front-End Development sem nec enim. Suspendisse potenti. Nulla facilisi. In ac ipsum at nunc feugiat ullamcorper sit amet nec justo.
              </p>
            </div>
          </motion.section>

          <motion.section
          initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8">
 <h2 className="text-3xl font-semibold">Education</h2>
 <div className="space-y-2">
   <div className="flex item-center justify-between">
    <div className="space-y-1">
 <p className="text-gray-600 dark:text-gray-400 text-sm">July, 2021 - 2025</p>
<p className="font-medium">Software Engineering</p>
<p className="text-blue-600 dark:text-blue-400">TCS</p>
    </div>
   </div>
   <p className="text-gray-600 dark:text-gray-400">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel felis ac lorem placerat pretium. UI/UX Design sed risus eu nulla convallis, non tincidunt augue cursus. Cras sagittis nisi ut purus aliquet, sed facilisis velit dictum. Aenean et elit metus. Sed malesuada, arcu sit amet fermentum laoreet, mauris orci cursus elit, sed luctus Front-End Development sem nec enim. Suspendisse potenti. Nulla facilisi. In ac ipsum at nunc feugiat ullamcorper sit amet nec justo.
   </p>
 </div>

 <div className="space-y-2">
   <div className="flex item-center justify-between">
    <div className="space-y-1">
 <p className="text-gray-600 dark:text-gray-400 text-sm">July, 2021 - 2025</p>
<p className="font-medium">Software Engineering</p>
<p className="text-blue-600 dark:text-blue-400">TCS</p>
    </div>
   </div>
   <p className="text-gray-600 dark:text-gray-400">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel felis ac lorem placerat pretium. UI/UX Design sed risus eu nulla convallis, non tincidunt augue cursus. Cras sagittis nisi ut purus aliquet, sed facilisis velit dictum. Aenean et elit metus. Sed malesuada, arcu sit amet fermentum laoreet, mauris orci cursus elit, sed luctus Front-End Development sem nec enim. Suspendisse potenti. Nulla facilisi. In ac ipsum at nunc feugiat ullamcorper sit amet nec justo.
   </p>
 </div>

 <div className="space-y-2">
   <div className="flex item-center justify-between">
    <div className="space-y-1">
 <p className="text-gray-600 dark:text-gray-400 text-sm">July, 2021 - 2025</p>
<p className="font-medium">Software Engineering</p>
<p className="text-blue-600 dark:text-blue-400">TCS</p>
    </div>
   </div>
   <p className="text-gray-600 dark:text-gray-400">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel felis ac lorem placerat pretium. UI/UX Design sed risus eu nulla convallis, non tincidunt augue cursus. Cras sagittis nisi ut purus aliquet, sed facilisis velit dictum. Aenean et elit metus. Sed malesuada, arcu sit amet fermentum laoreet, mauris orci cursus elit, sed luctus Front-End Development sem nec enim. Suspendisse potenti. Nulla facilisi. In ac ipsum at nunc feugiat ullamcorper sit amet nec justo.
   </p>
 </div>
          </motion.section>


          <motion.section
          initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8">
 <h2 className="text-3xl font-semibold">Projects</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
  <Card className="bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-100 cursor-pointer">
    <CardContent className="p-4">
<Image src={image1} alt="project 1 " className="rounded-lg mb-4"/>
<div className="flex items-center justify-between">
<div>
  <h3 className="font-medium">Project 1</h3>
  <p className="text-sm text-gray-600 dark:text-gray-400">Next Js, React</p>
</div>
<Button variant="ghost" size = "icon" ></Button>
</div>
    </CardContent>
  </Card>

   <Card className="bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-100 cursor-pointer">
    <CardContent className="p-4">
<Image src={image2} alt="project 2 " className="rounded-lg mb-4"/>
<div className="flex items-center justify-between">
<div>
  <h3 className="font-medium">Project 1</h3>
  <p className="text-sm text-gray-600 dark:text-gray-400">Next Js, React</p>
</div>
<Button variant="ghost" size = "icon" ></Button>
</div>
    </CardContent>
  </Card>

   <Card className="bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-100 cursor-pointer">
    <CardContent className="p-4">
<Image src={image3} alt="project 3 " className="rounded-lg mb-4"/>
<div className="flex items-center justify-between">
<div>
  <h3 className="font-medium">Project 1</h3>
  <p className="text-sm text-gray-600 dark:text-gray-400">Next Js, React</p>
</div>
<Button variant="ghost" size = "icon" ></Button>
</div>
    </CardContent>
  </Card>

   <Card className="bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-100 cursor-pointer">
    <CardContent className="p-4">
<Image src={image4} alt="project 4 " className="rounded-lg mb-4"/>
<div className="flex items-center justify-between">
<div>
  <h3 className="font-medium">Project 1</h3>
  <p className="text-sm text-gray-600 dark:text-gray-400">Next Js, React</p>
</div>
<Button variant="ghost" size = "icon" ></Button>
</div>
    </CardContent>
  </Card>

   <Card className="bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-100 cursor-pointer">
    <CardContent className="p-4">
<Image src={image5} alt="project 5 " className="rounded-lg mb-4"/>
<div className="flex items-center justify-between">
<div>
  <h3 className="font-medium">Project 1</h3>
  <p className="text-sm text-gray-600 dark:text-gray-400">Next Js, React</p>
</div>
<Button variant="ghost" size = "icon" ></Button>
</div>
    </CardContent>
  </Card>

   <Card className="bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 transition-transform duration-300 hover:scale-100 cursor-pointer">
    <CardContent className="p-4">
<Image src={image6} alt="project 6 " className="rounded-lg mb-4"/>
<div className="flex items-center justify-between">
<div>
  <h3 className="font-medium">Project 1</h3>
  <p className="text-sm text-gray-600 dark:text-gray-400">Next Js, React</p>
</div>
<Button variant="ghost" size = "icon" ></Button>
</div>
    </CardContent>
  </Card>



 </div>
          </motion.section>
          
        </main>
      </div>
    </div>
  );
}
