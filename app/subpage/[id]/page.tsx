// 'use client'
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// interface TreeNode {
//     id: number;
// }
// export default  function Page() {
//     const params = useParams();
//     const [id, setId] = useState<string | null>(null);
//     // const { id } = await params;
//     useEffect(() => {
//         if (params?.id) {
//           setId(params.id as string);
//         }
//       }, [params]);
//     return (
//         <div>
//             {id}
//         </div>
//     )
// }
// interface Props {
//     sss: [];
// }
// export default async function Page({ params }: { params: Props }) {
//     console.log('params', params.sss);
//     const { sss } = params;
//     // console.log('id', sss);
//     return (
//         <div>
//             aaa{sss}
//         </div>
//     )
// }



// export default async function Page() {
//     return (
//         <div>
//            111
//         </div>
//     )
// }
interface PageProps {
  params: Promise<{ id: string }>;
}


export default async function DetailsPage({ params }: PageProps) {

  return <div>详情页 ID: { (await params).id }</div>;
}