/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { projects } from "../../data/projects";
import { useEffect, useState } from "react";
import "./style.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}
const ProjectPage = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true, // Enable infinite scrolling
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 668px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    if (!instanceRef.current) return;

    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next(); // Moves to the next slide
      }
    }, 2000); // Adjust timing (3000ms = 3s per slide)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [instanceRef]);

  const blogPosts = [
    {
      id: 1,
      title: "Style Union",
      industry: "Fashion Retail",
      image: "./assets/images/case_study/Style Union.jpg",
      link: "./single-post.html",
    },
    {
      id: 2,
      title: "ESR",
      industry: "Constructions",
      image: "./assets/images/case_study/ESR.jpg",
      link: "./single-post.html",
    },
    {
      id: 3,
      title: "Growth Huntr",
      industry: "Digital marketting",
      image: "./assets/images/case_study/Growth Huntr.jpg",
      link: "./single-post.html",
    },
    {
      id: 4,
      title: "JEC",
      industry: "Eye Hospital",
      image: "./assets/images/case_study/JEC.jpg",
      link: "./single-post.html",
    },
    {
      id: 5,
      title: "Initative Media",
      industry: "Advertising Services",
      image: "./assets/images/case_study/Initative Media.jpg",
      link: "./single-post.html",
    },
    {
      id: 6,
      title: "Wynactive",
      industry: "Sports and Community Services",
      image: "./assets/images/case_study/Wynactive.jpg",
      link: "./single-post.html",
    },
    {
      id: 7,
      title: "The Lune",
      industry: "Food & Beverage",
      image: "./assets/images/case_study/The Lune.jpg",
      link: "./single-post.html",
    },
    {
      id: 8,
      title: "Jamm Nation",
      industry: "music and entertainment",
      image: "./assets/images/case_study/Jamm Nation.jpg",
      link: "./single-post.html",
    },
    {
      id: 9,
      title: "Clean Smart",
      industry: "Cleaning Management",
      image: "./assets/images/case_study/Clean Smart.jpg",
      link: "./single-post.html",
    },
    {
      id: 10,
      title: "BJC",
      industry: "Healthcare",
      image: "./assets/images/case_study/BJC.jpg",
      link: "./single-post.html",
    },
    {
      id: 11,
      title: "Pain Check",
      industry: "Healthcare",
      image: "./assets/images/case_study/Pain Check.jpg",
      link: "./single-post.html",
    },
    {
      id: 12,
      title: "Parents At Work",
      industry: "Human Resources Technology",
      image: "./assets/images/case_study/Parents At Work.jpg",
      link: "./single-post.html",
    },
    {
      id: 13,
      title: "Anyday",
      industry: "Food & Beverage",
      image: "./assets/images/case_study/Anyday.jpg",
      link: "./single-post.html",
    },
    {
      id: 14,
      title: "Level AI",
      industry: "Artificial Intelligence for Customer Support",
      image: "./assets/images/case_study/Level AI.jpg",
      link: "./single-post.html",
    },
    {
      id: 15,
      title: "Slingshot",
      industry: "Marketing",
      image: "./assets/images/case_study/Slingshot.jpg",
      link: "./single-post.html",
    },
    {
      id: 16,
      title: "Taketwo",
      industry: "Travel and Event Management",
      image: "./assets/images/case_study/Taketwo.jpg",
      link: "./single-post.html",
    },
    {
      id: 17,
      title: "3Forward",
      industry: "Media",
      image: "./assets/images/case_study/3Forward.jpg",
      link: "./single-post.html",
    },
    {
      id: 18,
      title: "Ecom Registry",
      industry: "Finance industry",
      image: "./assets/images/case_study/Ecom Registry.jpg",
      link: "./single-post.html",
    },
    {
      id: 19,
      title: "Accor",
      industry: "Hospitality",
      image: "./assets/images/case_study/Accor.jpg",
      link: "./single-post.html",
    },
    {
      id: 20,
      title: "Marrybrown",
      industry: "Food & Beverage",
      image: "./assets/images/case_study/marrybrown.jpg",
      link: "./single-post.html",
    },
    {
      id: 21,
      title: "Hy24",
      industry: "Financial Services",
      image: "./assets/images/case_study/Hy24.jpg",
      link: "./single-post.html",
    },
    {
      id: 22,
      title: "IRGA Singapore",
      industry: "Agritech enabler",
      image: "./assets/images/case_study/IRGA Singapore.jpg",
      link: "./single-post.html",
    },
  ];

  const caseStudyDetails = [
    {
      id: 1,
      title: "Style Union",
      industry: "Fashion Retail",
      challenge: "Store operators faced siloed data and manual inventory checks, causing stock imbalances and delays in sales performance tracking. Additionally, salespersons struggled with complex navigation to filter SKU-level performance, making it difficult to analyze real-time sales trends and optimize inventory.",
      solution: "Implemented a barcode scanning application integrated with Domo’s unified warehouse and advanced analytics in App Studio, enabling real-time SKU-level filtering and seamless dashboard navigation. The integration with Domo’s unified warehouse automated inventory tracking, improved data accessibility, and provided instant insights with a user-friendly interface.",
      impact_highlight1: "80% Time & Resource Savings",
      impact_summary1: "Eliminated manual inventory checks, optimizing stock levels.",
      impact_highlight2: "Real-Time Sales Insights",
      impact_summary2: "Barcode-driven navigation empowered sales teams.",
      impact_highlight3: "Improved Operational Efficiency",
      impact_summary3: "Automated tracking enhanced decision-making and streamlined operations.",
    },
    {
      id: 2,
      title: "ESR",
      industry: "Constructions",
      challenge: "Managing large data volumes manually led to inefficiencies, errors, and reporting delays, while inconsistent file formats complicated integration. Siloed data and the lack of automated reporting made real-time decision-making difficult. Additionally, ensuring secure, role-based access to BI dashboards without automated controls posed compliance challenges.",
      solution: "Implemented PowerShell automation, batch scripting, and Domo Workbench to streamline data aggregation, ensuring real-time synchronization and integration across systems. Leveraged Magic ETL dataflows to unify data sources, while role-based access and governance controls secured information flow. Custom alerts and automated workflows enabled proactive decision-making.",
      impact_highlight1: "80% Reduction in Manual Effort",
      impact_summary1: "Streamlined data aggregation and reporting.",
      impact_highlight2: "Real-Time Decision-Making",
      impact_summary2: "Enhanced analytics empowered faster insights.",
      impact_highlight3: "Improved Compliance & Security",
      impact_summary3: "Role-based access and governance strengthened data integrity.",
    },
    {
      id: 3,
      title: "Growth Huntr",
      industry: "Digital marketting",
      challenge: "Managing campaign data for 50+ clients across Meta, TikTok, Shopify, Pinterest, and Google Ads was manual, error-prone, and lacked scalability. With 250 datasets updated via Google Sheets, reporting delays and inconsistent data formats hindered decision-making. A centralized, automated solution was needed for real-time insights across multiple time zones.",
      solution: "Using Domo’s prebuilt connectors, Growth Huntr automated data integration from all sources into a unified platform. Scheduled refreshes ensured daily updates based on different timezones and Magic ETL dataflows streamlined processing enabling unified datasets for advanced reporting using App Studio.DomoAI's NLP feature also allowed users to easily query and retrieve answers from the data.",
      impact_highlight1: "75% Faster Reporting",
      impact_summary1: "Automated data refreshes eliminated delays.",
      impact_highlight2: "60% Increase in Client Satisfaction",
      impact_summary2: "Domo AI-enabled actionable insights.",
      impact_highlight3: "Error-Free Data Management",
      impact_summary3: "Eliminated manual entry, ensuring accuracy.",
    },
    {
      id: 4,
      title: "JEC",
      industry: "Eye Hospital",
      challenge: "JEC, a leading eye hospital, struggled with siloed data and manual data movement to a centralized platform, leading to inefficiencies. Unstructured data hindered predictability and advanced analytics, while the lack of regular alerts on patient health metrics posed challenges in proactive care management. Additionally, they needed to ensure secure visibility of patient data, granting access only to the respective doctors.",
      solution: "To address JEC's challenges, a centralized data platform was implemented using Domo’s prebuilt connectors to automate data integration and create structured datasets for advanced analytics.Magic ETL was utilized to streamline data processing, ensuring consistent and actionable insights.Domo’s personalized data permission features, were applied to grant doctors access only to the patient data relevant to their care, ensuring data confidentiality and compliance.Real-time alerts were set up to notify doctors about critical patient health metrics, enabling timely interventions and proactive care.",
      impact_highlight1: "Enhanced Patient Care",
      impact_summary1: "Real-time alerts enabled timely interventions.",
      impact_highlight2: "Improved Financial & Operational Efficiency",
      impact_summary2: "Automated data integration streamlined workflows.",
      impact_highlight3: "Secure & Compliant Data Access",
      impact_summary3: "Doctors accessed only relevant patient data.",
    },
    {
      id: 5,
      title: "Initative Media",
      industry: "Advertising Services",
      challenge: "Relying on Microsoft Excel for budget planning led to inefficiencies, errors, and time-intensive formatting. Manual formula creation increased the risk of inaccuracies, while updating budget values was cumbersome. Additionally, the organization required a writeback capability to adjust budget values directly from the reporting interface.",
      solution: "Implemented Domo’s writeback connectors and custom apps to enable real-time budget adjustments from the frontend. Automated dataflows replaced manual Excel processes, ensuring accurate calculations and seamless updates. Advanced finance dashboards provided dynamic insights with interactive budget controls.",
      impact_highlight1: "75% Reduction in Time Consumption",
      impact_summary1: "Automated budgeting replaced manual Excel updates.",
      impact_highlight2: "Eliminated Human Errors",
      impact_summary2: "Accurate calculations and real-time adjustments improved reliability.",
      impact_highlight3: "Enhanced Strategic Planning",
      impact_summary3: "Freed up time for high-value decision-making with dynamic finance dashboards.",
    },
    {
      id: 6,
      title: "Wynactive",
      industry: "Sports and Community Services",
      challenge: "WynActive faced challenges integrating the Perfect Gym API, requiring seamless data extraction and daily refresh. Complex business logic across multiple tables—contracts, members, clubs, and payments—made processing difficult. The lack of a real-time dashboard limited actionable insights and hindered business analysis.",
      solution: "Utilized Jupyter Workspace and Python scripts to extract, transform, and integrate Perfect Gym data into Domo. Implemented Magic ETL dataflows for automation and real-time synchronization, ensuring accurate calculations. Developed advanced dashboards to visualize key metrics and streamline business analysis.",
      impact_highlight1: "80% Reduction in Manual Effort",
      impact_summary1: "Automated data extraction and processing.",
      impact_highlight2: "Real-Time Insights",
      impact_summary2: "Live dashboards for better business analysis and decision-making.",
      impact_highlight3: "Improved Operational Efficiency",
      impact_summary3: "Seamless integration of contracts, members, and payments for enhanced analytics.",
    },
    {
      id: 7,
      title: "The Lune",
      industry: "Food & Beverage",
      challenge: "Lune faced fragmented data across Deputy and Lightspeed, making unified financial analysis difficult. The lack of a centralized platform restricted insights into revenue, margin, and profitability, with no predictability on revenue metrics. Additionally, manual monthly PowerPoint preparation consumed significant time and effort.",
      solution: "Integrated Deputy and Lightspeed data into Domo using prebuilt connectors, creating a unified financial analysis platform. Developed automated dashboards with drill-down capabilities to track revenue, margins, and profitability in real time. Leveraged Domo's Data Science and Predictive modules to enable advanced forecasting. Automated monthly PowerPoint reporting using the Microsoft PowerPoint plugin.",
      impact_highlight1: "Real-Time Financial Insights",
      impact_summary1: "Unified revenue, margin, and profitability tracking.",
      impact_highlight2: "75% Reduction in Manual Reporting",
      impact_summary2: "Automated PowerPoint generation saved time.",
      impact_highlight3: "Predictive Analytics for Better Forecasting",
      impact_summary3: "Enabled proactive decision-making.",
    },
    {
      id: 8,
      title: "Jamm Nation",
      industry: "music and entertainment",
      challenge: "Jamm Nation needed to unify music data from multiple streaming services, standardize reporting, and provide actionable insights for artists and investors. The lack of a competitive edge hindered proactive identification of artist performance across platforms. Additionally, embedding dashboards in customer portals while ensuring data security posed a challenge.",
      solution: "Integrated streaming service data into Domo using custom connectors, creating a centralized analytics platform. Developed an advanced UI/UX with DDX Bricks for an interactive artist performance dashboard. Utilized Domo Everywhere to embed secure, role-based dashboards within customer portals while enforcing PDP (Personalized Data Permissions) for data security.",
      impact_highlight1: " Real-Time Artist Performance Tracking",
      impact_summary1: "Unified data from multiple streaming platforms.",
      impact_highlight2: "Enhanced Competitive Edge",
      impact_summary2: "Predictive analytics provided deeper insights.",
      impact_highlight3: "Secure, Role-Based Dashboard Embedding",
      impact_summary3: "Ensured data security and accessibility.",
    },
    {
      id: 9,
      title: "Clean Smart",
      industry: "Cleaning Management ",
      challenge: "Cleansmart struggled to centralize cleaning operations data from multiple cloud platforms and MySQL on-premise databases. Complex transformations were required to unify the data, making it difficult to optimize operations. Additionally, understanding customer feedback was challenging due to unstructured and siloed data.",
      solution: "Integrated cloud and on-premise data into Domo using built-in connectors and Workbench for seamless ingestion. Utilized Magic ETL’s drag-and-drop capabilities to perform complex transformations, ensuring efficient data unification. Leveraged Domo’s AI-driven sentiment analysis to derive actionable insights from customer feedback.",
      impact_highlight1: "Centralized Cleaning Operations Data",
      impact_summary1: "Unified cloud and on-premise sources for better visibility.",
      impact_highlight2: "Optimized Operations with Automated ETL",
      impact_summary2: "Improved efficiency by simplifying complex transformations.",
      impact_highlight3: "AI-Driven Sentiment Analysis",
      impact_summary3: "Provided actionable insights from customer feedback, enhancing service quality.",
    },
    {
      id: 10,
      title: "BJC",
      industry: "Healthcare",
      challenge: "BJC HealthCare faced significant data management challenges due to their reliance on a local Gienie server without cloud infrastructure, which complicated remote access and data integration. They needed a dashboard to visualize transformed data with precise daily refreshes, requiring timely and accurate data updates to optimize operational efficiency.",
      solution: "The solution involved migrating BJC HealthCare’s data to a Domo warehouse using Domo workbench, enabling seamless integration and remote access. Domo’s prebuilt connectors facilitated smooth data transformation, and scheduled daily refreshes were set up to ensure real-time updates. A tailored dashboard was built to visualize key metrics and insights, providing a comprehensive view of operational data.",
      impact_highlight1: "Seamless Cloud Migration",
      impact_summary1: "Enabled remote access and eliminated local server limitations.",
      impact_highlight2: "Automated Data Refreshes",
      impact_summary2: "Ensured timely, accurate updates for better operational efficiency.",
      impact_highlight3: "Comprehensive Dashboard",
      impact_summary3: "Empowered quick, data-driven decision-making and improved scalability.",
    },
    {
      id: 11,
      title: "Pain Check",
      industry: "Healthcare",
      challenge: "Painchek faced difficulties in storing large volumes of data and ensuring timely reports with real-time analytics. They relied on Power BI for reporting but were concerned about the challenges, time, and cost of migrating to a different BI platform.",
      solution: "Domo's data warehouse provided a structured solution for storing and managing the large volume of data efficiently. Our DOMAAS product enabled a seamless and rapid migration of existing Power BI reports to Domo, ensuring minimal disruption and reducing the time and costs associated with the transition.",
      impact_highlight1: "Seamless Power BI Migration",
      impact_summary1: "Reduced transition time and cost while ensuring minimal disruption.",
      impact_highlight2: "Scalable Data Management ",
      impact_summary2: "Efficiently handled large datasets with structured storage in Domo.",
      impact_highlight3: "Real-Time Reporting",
      impact_summary3: "Enabled timely insights for improved operational efficiency and decision-making.",
    },
    {
      id: 12,
      title: "Parents At Work",
      industry: "Human Resources Technology",
      challenge: "Parents at Work struggled with consolidating data from multiple sources like HubSpot, Qualtrics, and Google Analytics into a centralized system. Managing complex backend transformations to power dashboard insights was time-consuming. They needed a solution that ensured monthly data refreshes, up-to-date reporting, and the ability to present secure, company-specific dashboards with relevant data for each client. Additionally, analyzing unstructured employee feedback was a challenge.",
      solution: "Domo’s prebuilt connectors and data integration features streamlined the process of consolidating data from various sources into a single platform. Magic ETL transformed the data and automated the monthly refresh process. Domo's Personalized data permission was implemented to ensure secure, company-specific dashboards for each client. Domo's AI powered sentimental analysis capabilities helped analyze unstructured employee feedback, turning it into actionable insights.",
      impact_highlight1: "Centralized Data Management",
      impact_summary1: "Unified multiple data sources into a single platform for streamlined reporting.",
      impact_highlight2: "Automated Monthly Refreshes",
      impact_summary2: "Ensured up-to-date insights with minimal manual intervention.",
      impact_highlight3: "AI-Driven Sentiment Analysis",
      impact_summary3: "Transformed unstructured employee feedback into actionable insights.",
    },
    {
      id: 13,
      title: "Anyday",
      industry: "Food & Beverage",
      challenge: "ANYDAY Group struggled with siloed data across XERO, Ordermate, and Google Sheets, making it difficult to obtain a unified view of business performance across their restaurants. The lack of an integrated, real-time dashboard hindered their ability to track key metrics, respond promptly to performance, staffing, and customer demand changes, and make data-driven decisions. Additionally, frequent data structure and logical changes in their source systems created challenges in maintaining consistent, reliable reporting.",
      solution: "Domo’s data integration connector capabilities enabled the seamless consolidation of data from XERO, Ordermate, and Google Sheets into a unified platform. Real-time dashboards were created to provide comprehensive insights into restaurant performance, staffing, and customer demand. Domo's flexible ETL processes and custom connector capabilities allowed for quick adaptations to data structure and logical changes, ensuring the solution remained scalable and up-to-date.",
      impact_highlight1: "75% Reduction in Manual Effort",
      impact_summary1: "Automated data entry and reporting processes improved operational efficiency.",
      impact_highlight2: "Flexible & Scalable Solution",
      impact_summary2: "Adapted to data structure changes, ensuring consistent and reliable reporting.",
      impact_highlight3: "Automated Email Attachment Retrieval",
      impact_summary3: "Reduced processing time by 60%, streamlining reporting workflows.",
    },
    {
      id: 14,
      title: "Level AI",
      industry: "Artificial Intelligence for Customer Support",
      challenge: "Level AI faced significant challenges with data quality and consistency due to diverse data sources, including phone systems, CRMs, and agent tools, leading to inconsistencies in format, quality, and completeness. Call recordings with noise, accents, and errors further impacted AI model accuracy. Integrating these multiple data sources was essential to derive comprehensive and actionable customer insights.",
      solution: "Using Domo, we integrated multiple data sources to unify customer interaction data into a single platform. Fuzzy logic was implemented to match customer metrics across these sources, utilizing a centralized filter for seamless analysis. Additionally, Mixpanel metrics were replicated across dashboards, providing a centralized view of customer insights and streamlining customer handling processes.",
      impact_highlight1: "80% Boost in Customer Satisfaction",
      impact_summary1: "Enhanced AI model accuracy and customer handling processes.",
      impact_highlight2: "72% Increase in Operational Efficiency",
      impact_summary2: "Automated data integration and analysis streamlined workflows.",
      impact_highlight3: "Unified Customer Insights",
      impact_summary3: "Integrated phone systems, CRMs, and agent tools into a centralized data platform.",
    },
    {
      id: 15,
      title: "Slingshot",
      industry: "Marketing",
      challenge: "Slingshot Media faced challenges in managing and optimizing campaign performance across various marketing platforms. The key difficulties included decision automation and a lack of predictability in campaign outcomes. Additionally, they required custom visuals to select and zoom into specific date ranges, enabling deeper analysis of trends and providing more actionable insights. This limitation hindered their ability to make data-driven decisions in real-time and track campaign performance effectively across platforms.",
      solution: "Domo’s inbuilt connectors and Magic ETL capabilities seamlessly ingested and unified data from various marketing platforms. Advanced analytics for campaign performance were built using Domo dashboards and App Studio. Domo's AutoML and data science capabilities were leveraged to predict campaign outcomes more effectively. Additionally, Domo’s DDX Bricks were used to create a range selector trend chart, allowing users to zoom in on specific date ranges and analyze campaign trends with precision, improving decision-making and providing actionable insights.",
      impact_highlight1: "75% Reduction in Manual Effort",
      impact_summary1: "Automated data ingestion and processing improved efficiency.",
      impact_highlight2: "Real-Time & Predictive Analytics",
      impact_summary2: "Enabled faster decision-making and accurate campaign forecasting.",
      impact_highlight3: "Custom Trend Visualizations",
      impact_summary3: "Enhanced campaign performance tracking with zoomable date range analysis.",
    },
    {
      id: 16,
      title: "Taketwo",
      industry: "Travel and Event Management",
      challenge: "Take2Eton encountered challenges in integrating booking data from multiple platforms (Sabre, Trainline,Travelfusion, Vibe, etc.) into a centralized system (Travcom) for invoicing and BI reporting. The presence of data silos, differing formats, and unreliable APIs hindered the ability to generate accurate, real-time insights for efficient decision-making.",
      solution: "Domo was utilized as a central repository to integrate data from multiple booking platforms using Python scripts, automating the flow into Travcom for invoicing. This streamlined the data flow, ensuring consistent and real-time updates, while also supporting efficient BI reporting for the business.",
      impact_highlight1: "95% Enhanced Data Accuracy",
      impact_summary1: "Eliminated data silos and inconsistencies.",
      impact_highlight2: "Automated Data Flow",
      impact_summary2: "Streamlined booking integration into Travcom for real-time invoicing.",
      impact_highlight3: "Improved Operational Efficiency",
      impact_summary3: "Faster decision-making with real-time BI reporting.",
    },
    {
      id: 17,
      title: "3Forward",
      industry: "Media",
      challenge: "3 Forward Company encountered significant challenges with data filtering and visualization in Domo, particularly when using custom visuals. The default filtering options, such as global and variable filters, failed to perform optimally when working with SQL APIs. This limitation created inefficiencies, as users struggled to filter data dynamically, resulting in slow response times and negatively impacting the overall user experience. With the growing need for a more advanced, yet user-friendly solution, the company required a method to ensure seamless interaction with data, enabling accurate and responsive visualizations across all users.",
      solution: "To resolve these issues, Domo's Dynamic Data Experience (DDX) and SQL API were integrated as the core solution. By leveraging DDX, the system was configured to generate dynamic SQL queries based on user-selected filters, ensuring that only the relevant data was fetched in real time. This dynamic querying approach allowed for on-the-fly filtering of large datasets without sacrificing performance. Additionally, the SQL API was optimized to handle complex data requests, providing a faster, more efficient way to interact with the data. The result was an intuitive interface that empowered users to perform advanced data analysis and filtering with ease, eliminating the need for extensive technical expertise.",
      impact_highlight1: "70% Faster Filtering",
      impact_summary1: "Optimized SQL queries for real-time data retrieval.",
      impact_highlight2: "Improved User Experience",
      impact_summary2: "Enabled intuitive filtering without technical expertise.",
      impact_highlight3: "Scalable & Efficient Data Analytics",
      impact_summary3: "Enhanced reporting accuracy and governance.",
    },
    {
      id: 18,
      title: "Ecom Registry",
      industry: "Finance industry",
      challenge: "The Ecom-Registry project faced challenges in accurately calculating CSF due to the complexity of data sourced from MongoDB. The data was spread across multiple tables, requiring intricate transformations to consolidate and process. Additionally, the existing ETL workflows were inefficient and lacked user-friendly tools for managing business filters and logic. The need for seamless integration of transformed data into machine learning models added another layer of complexity. Ensuring data quality and scalability for future enhancements was also a significant concern.",
      solution: "To address these challenges, the team configured Domo's MongoDB connector for efficient data integration. They used Jupyter Notebook for additional configurations to handle complex data relationships. Magic ETL, with its user-friendly interface, was employed to perform transformations, including CSF and OSF formulas, business filters, and logic. The streamlined ETL process ensured clean and structured data, ready for machine learning models focused on prediction and forecasting. This end-to-end solution enabled seamless handling of large datasets while maintaining accuracy and scalability.",
      impact_highlight1: "Enhanced Data Accuracy",
      impact_summary1: "Improved CSF & OSF calculations for high-quality outputs.",
      impact_highlight2: "Optimized ETL Workflows",
      impact_summary2: "Reduced manual effort and improved efficiency.",
      impact_highlight3: "Scalable & ML-Ready Data",
      impact_summary3: "Enabled precise predictions and future data growth.",
    },
    {
      id: 19,
      title: "Accor",
      industry: "Hospitality",
      challenge: "Accor needed a custom AI-driven application for Hotel Managers to upload menu PDFs and extract unstructured data for compliance evaluation. The manual process was time-consuming and error-prone, requiring an automated AI solution to parse, structure, and validate menu items. Additionally, the system needed role-based access control for different user levels while ensuring custom branding for each hotel. The biggest challenge was to automate the compliance check by comparing menu items against the hotel’s licensed inventory in real time.",
      solution: "We built an AI-powered OCR system to automatically extract and standardize data from menu PDFs, using Natural Language Processing (NLP) for structured analysis. A role-based access control (RBAC) system was implemented to restrict access based on user roles, ensuring security and compliance. The UI was designed to be dynamic and customizable, adapting to each hotel’s branding, including logos and themes. An AI-driven validation engine was integrated to instantly compare menu items with licensed inventory, automating compliance checks and generating reports.",
      impact_highlight1: "90% Faster Menu Evaluation",
      impact_summary1: "AI-driven automation replaced manual reviews.",
      impact_highlight2: "Improved Compliance Accuracy",
      impact_summary2: "Eliminated human errors in validation.",
      impact_highlight3: "Scalable & Secure Platform",
      impact_summary3: "Role-based access and customizable UI for branding.",
    },
    {
      id: 20,
      title: "Marrybrown",
      industry: "Food & Beverage",
      challenge: "Data spread across multiple systems, making real-time tracking difficult. Inefficient staff allocation affected operations. Lack of a unified view across outlets made trend analysis difficult, and high manual effort slowed reporting and decision-making.",
      solution: "Built a Sales Dashboard for real-time performance tracking and a Staffing Application for optimized workforce planning. Integrated Xilnex and other sources into Domo and automated reporting using Magic ETL & SQL workflows.",
      impact_highlight1: "Real-time Sales Insights",
      impact_summary1: "Faster decision-making with automated reporting.",
      impact_highlight2: "Optimized Workforce Planning",
      impact_summary2: "Reduced overstaffing and understaffing.",
      impact_highlight3: "Improved Efficiency & Collaboration",
      impact_summary3: "Streamlined operations and minimized manual effort.",
    },
    {
      id: 21,
      title: "Hy24",
      industry: "Financial Services",
      challenge: "Inconsistent finance data collection across portfolio companies led to inefficiencies. ESG reporting lacked structured data capture and submission tracking. Limited visualization of key financial and ESG metrics made decision-making slower.",
      solution: "Automated finance reporting with structured Domo pipelines. Built custom ESG data forms for standardized reporting. Implemented submission tracking & notifications and developed finance & ESG dashboards for better insights.",
      impact_highlight1: "Standardized Financial & ESG Reporting",
      impact_summary1: "Ensured accurate data capture and compliance.",
      impact_highlight2: "Automation & Efficiency",
      impact_summary2: "Reduced manual effort in finance and ESG reporting.",
      impact_highlight3: "Real-time Insights & Faster Decision-making",
      impact_summary3: "Improved tracking and response rates.",
    },
    {
      id: 22,
      title: "IRGA Singapore",
      industry: "Agritech enabler",
      challenge: "Siloed data across crop harvest and processing stages led to inefficiencies. Lack of real-time analytics in iPlanet made tracking difficult. No embedded analytics prevented monetization, and manual reporting slowed decision-making.",
      solution: "Built a centralized data warehouse integrating all data. Developed crop lifecycle dashboards with key KPIs. Embedded Domo Everywhere into iPlanet to enable monetization. Implemented automated ETL workflows for efficient data processing.",
      impact_highlight1: "End-to-End Visibility & Efficiency",
      impact_summary1: "Improved tracking across the agriculture supply chain.",
      impact_highlight2: "Monetization of Analytics",
      impact_summary2: "Embedded analytics created a new revenue stream.",
      impact_highlight3: "Automation & Faster Reporting",
      impact_summary3: "Reduced manual effort, improving forecasting and decision-making.",
    },
  ];
  
  
  // useEffect(() => {
  //   // Initialize owl carousel
  //   const initCarousel = () => {
  //     const $ = window.jQuery;
  //     if ($ && $.fn.owlCarousel) {
  //       $(".owl-carousel").owlCarousel({
  //         loop: true,
  //         margin: 15,
  //         nav: false,
  //         responsive: {
  //           0: {
  //             items: 1
  //           },
  //           768: {
  //             items: 2
  //           },
  //           1024: {
  //             items: 3
  //           }
  //         },
  //         // autoplay: true,
  //         // autoplayTimeout: 3000,
  //         // autoplayHoverPause: true
  //       });
  //     }
  //   };
  
  //   initCarousel();
  
  //   // If not successful, try again after a short delay
  //   const timer = setTimeout(() => {
  //     initCarousel();
  //   }, 500);
  
  //   // Cleanup function
  //   return () => {
  //     clearTimeout(timer);
  //     const $ = window.jQuery;
  //     if ($ && $.fn.owlCarousel) {
  //       $(".owl-carousel").owlCarousel("destroy");
  //     }
  //   };
  // }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[]);

  const [filteredData, setFilteredData] = useState(projects);

  const industries = [...new Set(projects.map((item) => item.industry))];
    
  const handleIndustryFilter = (industry: string) => {
    if (industry === "all" || !industry) {
      setFilteredData(projects);
    } else {
      setFilteredData(projects.filter((item) => item.industry === industry));
    }
  };

  const [keywordValue, setKeywordValue] = useState("");
  const handleKeywordSearch = (keyword: string) => {
    setKeywordValue(keyword);
    if (!keyword) {
      setFilteredData(projects);
      return;
    }
    const keywordSearch = filteredData.filter((item) =>
      Object.values(item.keywords.split(","))
        .join(" ")
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );
    setFilteredData(keywordSearch);
  };

  const [caseStudyData, setCaseStudyData] = useState<any>({});

  const handlePostClick = (id: number) => {
    const caseStudy = caseStudyDetails.find((item) => item.id === id);
    if (caseStudy) {
      setCaseStudyData(caseStudy);
    }
  };

  
  return (
    <>
      <div className="sub-banner sub-banner2">
        <figure className="sub-bannerleftlayer mb-0">
          <img src="./assets/images/sub-bannerleftlayer.png" alt="" className="img-fluid" />
        </figure>
        <Navbar activeNav="project" />
        <section className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_content" data-aos="fade-up">
                  <figure className="project-rightcircle service-rightcircle mb-0">
                    <img src="./assets/images/banner-circleleft.png" alt="" className="img-fluid" />
                  </figure>
                  <h4 className="h-title">Our projects</h4>
                  <p>Explore our diverse range of projects, crafted with precision and creativity. See how we bring ideas to life for our clients.</p>
                </div>
              </div>
            </div>
          </div>    
        </section>
        <figure className="banner-circleright mb-0">
          <img src="./assets/images/banner-circleright.png" className="img-fluid" alt="" />
        </figure>
        <figure className="sub-bannerrightlayer mb-0">
          <img src="./assets/images/sub-bannerrightlayer.png" alt="" className="img-fluid" />
        </figure>
      </div>

      
      <section className="project-section projectpage-section">
        <figure className="offer-toplayer mb-0">
          <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
    
          <div className="row">
            <div className="col-12">
              <div className="project_content" data-aos="fade-right">
                {/* <h6>RECENT PROJECTS</h6> */}
                <h2>Our Latest Projects</h2>
                <p>Discover our cutting-edge projects that highlight innovation and expertise. See how we create customized solutions to drive success across various industries.</p>
              </div>
            </div>
            
          </div>
          <div className="d-flex">
            <select 
              onChange={(event) => handleIndustryFilter(event.target.value)} 
              className="form-control mb-4 w-25 mr-2" 
              aria-placeholder="Industry Filter" 
              style={{zIndex: 100}} 
              aria-label="Default select example">
              <option value="all">All Industries</option>
              {
                industries?.map((val, index) => (
                  <option value={val} key={index}>{val}</option>
                ))
              }
            </select>
            <input className="form-control mb-4  w-75" placeholder="Keyword Search..." onChange={(event) => handleKeywordSearch(event.target.value)} value={keywordValue} style={{ zIndex: 100}} />
          </div>
        
          <div className="project_wrapper">
            <div className="row" data-aos="fade-up">
              {
                filteredData?.map((val, index) => (
                  <Link to={`/project/${val.id}`} className="col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                    <div className="case-box overlay">
                      <div className="overlay-image">
                        {
                          val.image ? (
                            <img src={val.image} alt="" className="w-100 rounded" />
                          ) : (
                            <img src="\assets\images\case-image1.jpg" alt="" className="w-100 rounded" />
                          )
                        }
                      </div>
                      <div className="content">
                        <span className="text-white">{val.industry}</span>
                        <h5 className="text-white">{val.title}</h5>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
        <figure className="offer-bottomlayer mb-0">
          <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>

      <section style={{ padding: "100px 0 40px 0", background: "#7daccf" }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-right">
            <h2 className="text-white mb-2">Our Latest Case Studies</h2>
            <p style={{ color: "#f3f3f3" }}>Gain insights from our recent case studies, demonstrating our commitment to delivering impactful solutions. Explore how we solve complex challenges with strategic innovation.</p>
          </div>
          <div>
            <div className="">
              {/* <div className="owl-carousel owl-theme" style={{ height: "400px" }}>
                {blogPosts.map((post, index) => (
                  <div className="item" key={index} data-toggle="modal" data-target=".exampleModalCenter" onClick={() => handlePostClick(post?.id)}>
                    <div className="blog_boxcontent">
                      <div className="upper_portion">
                        <figure className="mb-0">
                          <img src={post.image} className="article_img" alt={post.title} style={{ height: "200px", objectFit: "cover" }}/>
                        </figure>
                      </div>
                      <div className=" bg-white" style={{ height: "auto", marginTop: "-40px", opacity: "0.9", marginLeft: "10px", marginRight: "10px", padding: "20px" }}>
                        <div className="">
                          <h4>{post.title}</h4>
                          <p className="text-size-16" style={{ marginTop: "-10px", color: "#7a3ca3"}}>{post.industry}</p>
                          <div className="text-size-16" style={{ marginTop: "-15px", fontWeight: "medium", color: "#000000"}}>More Details</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="navigation-wrapper">
                <div>
                  <div ref={sliderRef} className="keen-slider" style={{ height: "350px" }}>
                    {blogPosts.map((post, index) => (
                      <div className="keen-slider__slide" key={index} data-toggle="modal" data-target=".exampleModalCenter" onClick={() => handlePostClick(post?.id)}>
                        <div className="blog_boxcontent">
                          <div className="upper_portion">
                            <figure className="mb-0">
                              <img src={post.image} className="article_img" alt={post.title} style={{ width: "100%", height: "200px", objectFit: "cover" }}/>
                            </figure>
                          </div>
                          <div className=" bg-white" style={{ height: "auto", marginTop: "-40px", opacity: "0.9", marginLeft: "10px", marginRight: "10px", padding: "20px" }}>
                            <div className="">
                              <h4>{post.title}</h4>
                              <p className="text-size-16" style={{ marginTop: "-10px", color: "#7a3ca3"}}>{post.industry}</p>
                              <div className="text-size-16" style={{ marginTop: "-15px", fontWeight: "medium", color: "#000000"}}>More Details</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {loaded && instanceRef.current && (
                <div className="dots">
                  {[
                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                  ].map((idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx);
                        }}
                        className={`dot${  currentSlide === idx ? " active" : ""}`}
                      ></button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {
        caseStudyData && (
          <div className="modal fade exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenter" >
            <div className="modal-dialog modal-dialog-centered case_study_container" role="document">
              <div className="container">
                <div className="modal-content" style={{ maxWidth: "100%", margin: "0 auto", background: "#ffffff" }}>
                  <div>
                    <div className="mb-3 text-left">
                      <h2>{caseStudyData?.title}</h2>
                      <div className="text-size-18" style={{ color: "#7a3ca3"}}>{caseStudyData?.industry}</div>
                    </div>
                    <div className="case_study_container-items">
                      <div className="case_study_container-item case_study_challenge">
                        <h3>Challenge</h3>
                        <p className="text-size-16">{caseStudyData?.challenge}</p>
                      </div>
                      <div className=" case_study_container-item case_study_solution">
                        <h3>Solution</h3>
                        <p className="text-size-16">{caseStudyData?.solution}</p>
                      </div>
                      <div className="case_study_container-item case_study_impact">
                        <h3>Impact</h3>
                        <div>{caseStudyData?.impact_highlight1}</div>
                        <p className="text-size-16">{caseStudyData?.impact_summary1}</p>
                        <div>{caseStudyData?.impact_highlight2}</div>
                        <p className="text-size-16">{caseStudyData?.impact_summary2}</p>
                        {caseStudyData?.impact_highlight3 && <div>{caseStudyData?.impact_highlight3}</div> }
                        {caseStudyData?.impact_summary3 && <p className="text-size-16">{caseStudyData?.impact_summary3}</p> }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      

      <Footer />
    </>
  );
};

export default ProjectPage;