// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { Edit, Ellipsis, Trash } from "lucide-react";
// import Image from "next/image";
// export default function Home() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-3" >
//     {Array.from({ length: 60 }, (_, i) => (
//         <Card key={i} className="" >
//             <div className="grid grid-rows-5">
//                 <div className="relative w-full h-full row-span-4">
//                     <Image
//                         src="/public/Snipaste.png"
//                         fill
//                         alt='[图片]'
//                         className="object-cover rounded-t-lg p-0 m-0" />
//                 </div>
//                 <div className="row-span-1 m-1">
//                     <div className="min-w-0 w-full flex justify-between">
//                         <p></p>

//                         <DropdownMenu >
//                             <DropdownMenuTrigger>
//                                 <Button key={1} variant='ghost' className="m-0 h-4 p-0"  >
//                                     <Ellipsis className="p-0 m-0" />
//                                 </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent className="w-20" align='end'>
//                                 <DropdownMenuItem className="">
//                                 <Edit className="w-4 h-4 mr-2 " />
//                                     <span>编辑</span>
//                                 </DropdownMenuItem>
//                                 <DropdownMenuItem className="">
//                                 <Trash className="w-4 h-4 mr-2 " />
//                                     <span>删除</span>
//                                 </DropdownMenuItem>
//                             </DropdownMenuContent>


//                         </DropdownMenu>

//                     </div>
//                     <div className=" m-1">
//                         {'菲律宾联塑管道工厂'}
//                     </div>
//                     <div className="w-full whitespace-nowrap flex gap-x-1">

//                         {Array.from({ length: 5 }, (_, i) => (
//                             i < 3 ?
//                                 <span key={i} className="flex-1 h-3 bg-red-500 gap-1"></span>
//                                 :
//                                 <span key={i} className="flex-1 h-3 bg-gray-300 gap-1"></span>
//                         ))}
//                     </div>
//                 </div>
//             </div>







//         </Card>

//     ))
//     }
// </div >

//   );
// }
import { Mail, Linkedin, Github, FileText, Home, User, Briefcase, GraduationCap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col items-start">
                            <h1 className="text-4xl font-bold text-gray-900 ">吴 某</h1>
                            <p className="text-lg text-gray-600 mt-2 justify-between">Web Developer</p>


                            <div className="flex justify-center space-x-4 mt-4">
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button variant="outline" asChild >
                                            <div>
                                                <Mail className="w-4 h-4 mr-2" />
                                                Email
                                            </div>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <a href="mailto:internetyinmali@gmail.com" >
                                                <span>Google Email</span>
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="mailto:internet-y@outlook.com" >
                                                <span>Outlook Email</span>
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href="mailto:internet-y@163.com" >
                                                <span>网易 Email</span>
                                            </a>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <Button variant="outline" asChild>
                                    <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        <Linkedin className="w-4 h-4 mr-2" />
                                        LinkedIn
                                    </a>
                                </Button>
                                <Button variant="outline" asChild>
                                    <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        <Github className="w-4 h-4 mr-2" />
                                        GitHub
                                    </a>
                                </Button>
                                <Button variant="outline" asChild>
                                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        <FileText className="w-4 h-4 mr-2" />
                                        Resume
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <img
                            src='photo.png'
                            alt="[照片]"
                            className="object-scale-down rounded-full border-4 border-gray-200"
                        />
                    </div>
                </header>

                {/* About Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <User className="w-5 h-5 mr-2" />
                            About Me
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700">
                            I am a passionate web developer with experience in building responsive and user-friendly websites. I specialize in React, Next.js, and Node.js.
                        </p>
                    </CardContent>
                </Card>

                {/* Experience Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Briefcase className="w-5 h-5 mr-2" />
                            Experience
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-900">Web Developer at XYZ Corp</h3>
                                <p className="text-sm text-gray-600">Jan 2020 - Present</p>
                                <p className="text-gray-700">
                                    Developed and maintained company website using React and Node.js.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Intern at ABC Inc</h3>
                                <p className="text-sm text-gray-600">Jun 2019 - Dec 2019</p>
                                <p className="text-gray-700">
                                    Assisted in building web applications and learned best practices in web development.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Education Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <GraduationCap className="w-5 h-5 mr-2" />
                            Education
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <h3 className="font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
                            <p className="text-sm text-gray-600">University of Example, 2016 - 2020</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Skills Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Code className="w-5 h-5 mr-2" />
                            Skills
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">HTML</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">CSS</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">React</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Next.js</span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}