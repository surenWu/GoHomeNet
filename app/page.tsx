import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Edit, Ellipsis, Trash } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-3" >
    {Array.from({ length: 60 }, (_, i) => (
        <Card key={i} className="" >
            <div className="grid grid-rows-5">
                <div className="relative w-full h-full row-span-4">
                    <Image
                        src="/Snipaste.png"
                        fill
                        alt='[图片]'
                        className="object-cover rounded-t-lg p-0 m-0" />
                </div>
                <div className="row-span-1 m-1">
                    <div className="min-w-0 w-full flex justify-between">
                        <p></p>

                        <DropdownMenu >
                            <DropdownMenuTrigger>
                                <Button key={1} variant='ghost' className="m-0 h-4 p-0"  >
                                    <Ellipsis className="p-0 m-0" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-20" align='end'>
                                <DropdownMenuItem className="">
                                <Edit className="w-4 h-4 mr-2 " />
                                    <span>编辑</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="">
                                <Trash className="w-4 h-4 mr-2 " />
                                    <span>删除</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>


                        </DropdownMenu>

                    </div>
                    <div className=" m-1">
                        {'菲律宾联塑管道工厂'}
                    </div>
                    <div className="w-full whitespace-nowrap flex gap-x-1">

                        {Array.from({ length: 5 }, (_, i) => (
                            i < 3 ?
                                <span key={i} className="flex-1 h-3 bg-red-500 gap-1"></span>
                                :
                                <span key={i} className="flex-1 h-3 bg-gray-300 gap-1"></span>
                        ))}
                    </div>
                </div>
            </div>







        </Card>

    ))
    }
</div >

  );
}
