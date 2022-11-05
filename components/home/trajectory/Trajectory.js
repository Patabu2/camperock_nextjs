import TrajectorySection from "./TrajectorySection";

import classes from "./Trajectory.module.scss";
import typography from "../../../styles/typography.module.scss";

const trajectory = {
  experience: [
    {
      dates: "Jun 2022 - Present",
      title: "Founding Software Engineer",
      company: "Paisa",
      description:
        "Bringing financial security to people through remittance-based loans. Developed and designed a solid technological foundation for the business.",
    },
    {
      dates: "Jun 2021 - Feb 2022",
      title: "Full Stack Developer",
      company: "S2G Energy",
      description:
        "Developed a solar energy consumption management web app for a major generator in Mexico using React.JSin the frontend and Django in the backend.",
    },
    {
      dates: "Jul 2020 - Dec 2020",
      title: "Node.JS Back-End Developer",
      company: "Chib",
      description:
        "In charge of managing and expanding the app's Node.JS back-end hosted in AWS. Proposed and implemented the first version of Chibotito, a WhatsApp bot to make remittances.",
    },
    {
      dates: "Jan 2020 - Jul 2020",
      title: "Data Analyst and Web Developer",
      company: "S2G Energy",
      description:
        "Proposed and implemented the first version of the Energy Assistant webpage (https://assistant.energy) for data visualization and device control. Proposed a WhatsApp bot for energetic queries and thermostat control.",
    },
    {
      dates: "Nov 2019 - Dec 2020",
      title: "Data Analytics Teaching Assistance",
      company: "Tecnológico de Monterrey",
      description:
        "Assist in the delivery of lectures that covered Python for data analysis, Machine Learning basics (sci-kit learn), Deep Learning basics (Tensorflow), front and back-end development, JavaScript for data visualization (D3.js, Leaflet.js, Plotly.js), and databases (SQL & No-SQL).",
    },
    {
      dates: "Jan 2019 - Jan 2020",
      title: "Business Analyst",
      company: "S2G Energy",
      description:
        "Analyze the energetic consumption of clients to plan saving strategies. Creation of dashboards with PowerBI.",
    },
  ],

  education: [
    {
      dates: "Jan 2021 - Dec 2022",
      title: "MSc. Computer Science",
      company: "Tecnológico de Monterrey",
      description:
        "Program focused on understanding the fundamental capabilities and limitations of computers. Thesis focused on Deep Learning applied to the understanding of tauopathies (e.g. Alzheimer's disease). Earned a 100% tuition scholarship and graduated with high honors.",
    },
    {
      dates: "May 2019 - Oct 2019",
      title: "Data Analytics and Visualization Bootcamp",
      company: "Tecnológico de Monterrey",
      description:
        "Bootcamp that covers various tools and methods for data analytics and visualization such as Python, Machine and Deep Learning, databases, JavaScript, HTML & CSS",
    },
    {
      dates: "Aug 2015 - Dec 2018",
      title: "Sustainable Development Engineering",
      company: "Tecnológico de Monterrey",
      description:
        "The main focus areas of the program are environmental engineering, process engineering and electrical engineering. Finished a year earlier due to great performance and graduated top of the generation with high honors.",
    },
  ],

  certifications: [
    {
      dates: "2021",
      title: "TensorFlow: Advanced Techniques Specialization",
      company: "DeepLearning.AI",
      description:
        "First, learn how to build custom TensorFlow models, layers, and loss functions. From there, work on implementing advanced computer vision and generative models, as well as learning how to do distributed training in TensorFlow.",
    },
    {
      dates: "2021",
      title: "Generative Adversarial Networks Specialization",
      company: "DeepLearning.AI",
      description:
        "Understand how neural networks can create new data based on examples and learn about the state-of-the-art approaches to this difficult task.",
    },
    {
      dates: "2021",
      title: "TensorFlow Developer Professional Certificate",
      company: "DeepLearning.AI",
      description:
        "Four-course specialization that focuses on building basic Deep Learning models for various tasks with TensorFlow.",
    },
    {
      dates: "2021",
      title: "Deep Learning Specialization",
      company: "DeepLearning.AI",
      description:
        "Five-course specialization that goes from the very basics of how neural networks work and builds up from there to understanding state-of-the-art models and how to structure Deep Learning projects.",
    }
  ]
};

const Trajectory = function () {
  return (
    <section className={classes["trajectory"]} id="trajectory">
      <h2
        className={`${typography["heading-2"]} ${typography["heading-2--purple"]} mb-lg`}
      >
        My trajectory
      </h2>
      <TrajectorySection title="Experience" data={trajectory.experience} />
      <TrajectorySection title="Education" data={trajectory.education} />
      <TrajectorySection
        title="Certifications"
        data={trajectory.certifications}
      />
    </section>
  );
};

export default Trajectory;
