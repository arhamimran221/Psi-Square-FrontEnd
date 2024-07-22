import React from 'react'
import projectImage from "../../Assests/Demo-img.png"
import "./ProjectDone.css"
import ProjectCard from './ProjectCard'
import Banyo from "../../Assests/banyoUk.png"
import Buizz from "../../Assests/EventBuizz.png"
import react from "../../Assests/reactLogo.svg";
import python from "../../Assests/pythonIcon.svg"
import awsIcon from "../../Assests/awsIcon.svg";
import javascript from "../../Assests/javascriptIcon.svg"
import MagentoIcon from "../../Assests/magentoIcon.svg"
import php from "../../Assests/phpIcon.svg"
import Jquery from '../../Assests/jqueryIcon.svg'
import mySql from "../../Assests/mysqlIcon.svg"
import nexusHome from "../../Assests/nexusHome.png"
import Acrunity from "../../Assests/arcunity.png"
import postgreSQL from "../../Assests/postgresqlIcon.svg"
import secp from "../../Assests/scep.png"
import banyofeature1 from "../../Assests/customStore.png"
import banyofeature2 from "../../Assests/checkoutPage.png"
import banyofeature3 from "../../Assests/RecommendImage.png"
import banyofeature4 from "../../Assests/customChatbot.png"
import banyofeature5 from "../../Assests/paymentMethod.png"
import eventfeature1 from "../../Assests/createEvent.png"
import eventfeature2 from "../../Assests/eventBooking.png"
import eventfeature3 from "../../Assests/eventReminder.png"
import nexusfeature1 from "../../Assests/appointmentBook.png"
import nexusfeature2 from "../../Assests/recommendService.png"
import diamondFeature1 from "../../Assests/anomalyDetection.png"
import diamondFeature2 from "../../Assests/EntityRecognition.png"
import diamondFeature3 from "../../Assests/chatBot.png"
import diamondFeature4 from "../../Assests/lecsicalEdit.png"

const ProjectsDetail = () => {
   const projectsData = [
    {
        id: 0,
        count : "01",
        heading: "Banyo UK",
        descrip: "UK largest Home improvement ecommerce store.",
        projectImage: Banyo,
        direction: 'row',
        reactIcon: react,
        javascript: javascript,
        MagentoIcon:MagentoIcon,
        PhpIcon: php,
        jqueryIcon: Jquery,
        mySqlIcon : mySql,
        whatwedid: "We developed a fully custom Ecommerce store featuring unique and user-friendly designs. Custom checkout pages streamline the purchasing process, reducing cart abandonment. Secure payment method integration includes PayPal, Stripe, and credit card processing. An intelligent recommendation system personalizes product suggestions, boosting sales. A custom chatbot provides real-time customer support, enhancing user satisfaction and reducing support workload.",
        prosProject : [
        {
            id: 0,
            featureTitle: "Custom Ecommerce store",
            featureDescription : "We developed a fully custom Ecommerce store featuring unique and user-friendly designs",
            featureImage: banyofeature1
        },
        {
            id:1,
            featureTitle: "Custom Checkout pages",
            featureDescription: "Custom checkout pages streamline the purchasing process, reducing cart abandonment",
            featureImage : banyofeature2
        },
        {
            id:2,
            featureTitle: "Payment method integration",
            featureDescription: "Secure payment method integration includes PayPal, Stripe, and credit card processing",
            featureImage : banyofeature5
        },
        {
            id:3,
            featureTitle: "Recommendation system",
            featureDescription: "An intelligent recommendation system personalizes product suggestions, boosting sales",
            featureImage : banyofeature3
        },
        {
            id:4,
            featureTitle: "Custom chatbot",
            featureDescription: "A custom chatbot provides real-time customer support, enhancing user satisfaction and reducing support workload.",
            featureImage : banyofeature4
        },
         ]

    },
    {
        id: 1,
        count : "02",
        heading: "Event Buizz",
        descrip: "This is an event management and planning platform for all the occasions",
        projectImage: Buizz,
        direction: 'row-reverse',
        reactIcon: react,
        PhpIcon: php,
        whatwedid: "We implemented an event management system that allows users to create and customize events easily. The system includes a seamless event booking process for attendees and automated reminders for upcoming events. An admin dashboard provides a comprehensive interface for managing booking activities. Additionally, a chatbot offers real-time support and answers queries, while the system also suggests ideal venues for hosting events.",
        prosProject : [
            {
                id: 0,
                featureTitle: "Event creation",
                featureDescription : "We implemented an event management system that allows users to create and customize events easily.",
                featureImage: eventfeature1
            },
            {
                id:1,
                featureTitle: "Event Booking",
                featureDescription: "The system includes a seamless event booking process for attendees and automated reminders for upcoming events.",
                featureImage : eventfeature2
            },
            {
                id:2,
                featureTitle: "Event Reminder",
                featureDescription: "The system includes a seamless event booking process for attendees and automated reminders for upcoming events.",
                featureImage : eventfeature3
            },
             ]
    },
    {
        id: 2,
        count : "03",
        heading: "Nexus Home",
        descrip: "A true representation of Electric and Smart home solution providers Features we developed.",
        projectImage: nexusHome,
        direction: 'row',
        reactIcon: react,
        PhpIcon: php,
        mySqlIcon : mySql,
        whatwedid : "We offer a comprehensive solution featuring appointment booking and tailored recommendations. Our platform is designed with a responsive interface to ensure optimal user experience across all devices.",
        prosProject : [
            {
                id: 0,
                featureTitle: "Appointment booking",
                featureDescription : "We offer a comprehensive solution featuring appointment booking and tailored recommendations.",
                featureImage: nexusfeature1
            },
            {
                id:1,
                featureTitle: "Recommendations of solutions",
                featureDescription : "We offer a comprehensive solution featuring appointment booking and tailored recommendations.",
                featureImage : nexusfeature2
            },
            {
                id:2,
                featureTitle: "Mobile Responsive",
                featureDescription: "Whole site was made mobile responsive providing smooth UI experience.",
                featureImage : nexusHome
            },
             ]
    },
    {
        id: 3,
        count : "04",
        heading: "Acrunity",
        descrip: "An AI-powered solution of legal professionals to extract sensitive data from insurance documents and suggest legal authorities and user with insurance selection process",
        projectImage: Acrunity,
        direction: 'row-reverse',
        reactIcon: react,
        pythonIcon: python,
        postgreSQLIcon: postgreSQL,
        whatwedid : "We developed a system featuring a chatbot integrated with an OCR module to read and index large documents in the database. It uses NLP to handle questions and provide optimal answers. The system includes an insurance recommendation component and can summarize document details according to different healthcare and legal departments.",
    
    },
    {
        id: 4,
        count : "05",
        heading: "SECP",
        descrip: "The Securities and Exchange Commission of Pakistan (SECP), pursuant to the SECP Act of 1997 has been mandated to regulate and develop the corporate sector and the non-bank financial markets.",
        projectImage: secp,
        direction: 'row',
        reactIcon: react,
        pythonIcon: python,
        whatwedid: "We developed an AI system to convert all public handwritten documents into a searchable format for internal government use. The system indexes sensitive records to dedicated accounts and includes an advanced OCR module capable of reading various languages such as Urdu, Punjabi, and Sindhi. Additionally, it translates these languages into English for comprehensive government record maintenance.",
    },
    {
        id: 5,
        count : "06",
        heading: "YourDiamondGuys",
        descrip: "A best platform for diamond buying with strong AI to figure out best out of poor diamonds.",
        projectImage: projectImage,
        direction: 'row-reverse',
        reactIcon: react,
        pythonIcon: python,
        awsIcon: awsIcon,
        postgreSQLIcon: postgreSQL,
        whatwedid: "YourDiamondGuys is a top-rated mobile app designed to help you buy diamonds with ease and confidence. With its user-friendly interface and advanced search features, you can easily find the perfect diamond to suit your needs and budget. Whether you're looking for an engagement ring, or wedding band, or simply want to invest in a high-quality diamond, YourDiamondGuys has you covered.",
        prosProject : [
            {
                id: 0,
                featureTitle: "Anomaly Detection with Localization",
                featureDescription : "We focus on detecting anomalies in diamonds, such as scratches and breaks, using a custom YOLOv8 segmentation model. The system is trained to identify these defects with high accuracy.",
                featureImage: diamondFeature1
            },
            {
                id:1,
                featureTitle: "Entity Recognition with NLP",
                featureDescription : "We apply Natural Language Processing to recognize entities in diamond reports, whether they are in PDF or image format. If a PDF is provided, we use PaddleOCR or AWS Textract to extract the text. Additionally, we train a custom model to detect specific text patterns.",
                featureImage : diamondFeature2
            },
            {
                id:2,
                featureTitle: "AI-Powered Chatbot",
                featureDescription: " We develop a customized chatbot that uses artificial intelligence to engage in meaningful conversations with users.",
                featureImage : diamondFeature3
            },
            {
                id:3,
                featureTitle: "Content Editing for Blogs",
                featureDescription: "Our lexical tool provides robust editing capabilities for blog content, ensuring quality and consistency.",
                featureImage : diamondFeature4
            },
             ]
    },
   ]
  

  return (
    <div className='psi_container my-[100px]'>
     {projectsData.map((item)=>(
       <ProjectCard prosProject={item.prosProject} awsIcon={item.awsIcon} postgreSQLIcon={item.postgreSQLIcon} count={item.count} heading={item.heading} descrip={item.descrip} projectImage={item.projectImage} direction={item.direction} reactIcon={item.reactIcon} javascript={item.javascript} MagentoIcon={item.MagentoIcon} phpIcon={item.PhpIcon} jqueryIcon={item.jqueryIcon} mySqlIcon={item.mySqlIcon} pythonIcon={item.pythonIcon} whatwedid={item.whatwedid}/>
     ))}
    </div>
  )
}

export default ProjectsDetail
