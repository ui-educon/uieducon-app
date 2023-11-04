import PartnersImg from "./PartnersImg";
const Partners = () =>{
    return (
        <div className="py-4">
            {/* National */}
           <div className="my-8">
        <div className="py-6 flex justify-center">
           
            <h1 className="md:text-5xl text-3xl font-bold">
                National 
                 <span className="uicolor"> Partners</span>
            </h1>
        </div>
            
                
                <div className="flex  flex-wrap md:justify-evenly md:items-center items-center md:flex-row flex-col">
                    <div className="flex md:w-[65%] w-[100%] flex-wrap items-center justify-center">
                    <PartnersImg src="https://pbs.twimg.com/profile_images/1363520582386475014/Gj1aE4Yo_400x400.jpg" alt="Shaheed Sukhdev College of Business Studies"/>
                    <PartnersImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/JNU_logo.svg/1200px-JNU_logo.svg.png" alt="JNU"/>
                    <PartnersImg src="https://aktu.ac.in/images/uptu_logo.png" alt="AKTU"/>
                    <PartnersImg src="https://gnim.ac.in/img/icon/logo.png" alt="GNIM"/>
                    <PartnersImg src="https://images.collegedunia.com/public/college_data/images/logos/14952618335986204525064148687631640234919n.jpg" alt="GBIT"/>
                    <PartnersImg src="https://www.igdtuw.ac.in/images/log.jpg" alt="IGDTU"/>
                    <PartnersImg src="https://img.collegedekhocdn.com/media/img/institute/logo/1440576082.png" alt="BPIT"/>
                    <PartnersImg src="https://it.mait.ac.in/images/logo_small_trans.png" alt="MAIT"/>
                    </div>
            </div>
            </div>

        {/* International */}
            <div className="my-8">
            <div className="py-6 flex justify-center">
           
           <h1 className="md:text-5xl text-3xl font-bold">
               International 
                <span className="uicolor"> Partners</span>
           </h1>
          </div>
         
          <div className="flex flex-wrap md:justify-evenly md:items-start items-center md:flex-row flex-col">
          <div className="flex md:w-[65%] w-[100%] flex-wrap items-center justify-center">

          <PartnersImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Cardiff_University_%28logo%29.svg/1200px-Cardiff_University_%28logo%29.svg.png" alt="CARDIFF UNIVERSITY"/>
          <PartnersImg src="https://logos-world.net/wp-content/uploads/2022/01/University-of-Alabama-Logo.png" alt="UNIVERSITY OF ALABAMA"/>
          <PartnersImg src="https://www.pcam-doctorate.eu/wp-content/uploads/2017/04/milan-logo.png" alt="MAIT"/>
          <PartnersImg src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Logo_Polnische_Akademie_der_Wissenschaften_.png" alt="PAN"/>
          <PartnersImg src="https://www.mmu.ac.uk/brand/logo/2.1-Primary-Logo_2.jpg" alt="MACNHESTER METROPOLITAN UNIVERSITY"/>
          <PartnersImg src="https://jcpileish.org/wp-content/uploads/2018/08/Universidade_Federal_Do_Piaui.jpg" alt="Universal Federal"/>
          <PartnersImg src="https://www.londonmet.ac.uk/media/london-metropolitan-university/london-met-photos/logos/london-metropolitan-university-corporate-logo/Main-University-logo-on-white-background.jpg" alt="LONDON METROPOLITAN UNIVERSITY"/>
          <PartnersImg src="https://media.licdn.com/dms/image/C560BAQFFNPYE2QvUzg/company-logo_200_200/0/1519869373547?e=2147483647&v=beta&t=lwwF3Tuj8hZbpx_RvJzpOcSiwFyDNIZiYEazItMLinI" alt="MACNHESTER METROPOLITAN UNIVERSITY"/>
           </div>
            </div>
            </div>


        {/* Academic */}

            <div className="my-8">
            <div className="py-6 flex justify-center">
           
           <h1 className="md:text-5xl text-3xl font-bold">
            Academy 
                <span className="uicolor"> Partners</span>
           </h1>
          </div>
         
          <div className="flex flex-wrap md:justify-evenly md:items-start items-center md:flex-row flex-col">
          <div className="flex md:w-[65%] w-[100%] flex-wrap items-center justify-center">

          <PartnersImg src="https://icccn.co.uk/src/assets/images/academicpartners/jan%20wyzoski%20ogo.jpg" alt="CARDIFF UNIVERSITY"/>
          <PartnersImg src="https://icnda.in/img/springer-logo.jpg" alt="UNIVERSITY OF ALABAMA"/>
          <PartnersImg src="https://icccn.co.uk/src/assets/images/academicpartners/MMU.png" alt="MACNHESTER METROPOLITAN UNIVERSITY"/>
          <PartnersImg src="https://icccn.co.uk/src/assets/images/academicpartners/NUST.jpeg" alt="PAN"/>

 </div>
          
            </div>
            </div>
          
     
          
        
        
        </div>
        
    )
}
export default Partners;