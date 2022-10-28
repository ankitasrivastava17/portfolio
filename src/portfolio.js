const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: '< AS. />',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ankita',
  role: 'Java Backend Developer',
  description:
    'I am a self-motivated and diligent individual seeking for opportunities to hone my related acumen. My approach at work is to be organized and target-oriented in order to accomplish project goals with accuracy in time.',
  description2:
    'Here are a few of the other activities that I love to do !',

  act1: '➠ Nature walk 🏞',
  act2: '➠ Yoga Enthusiast 🧘🏻‍♀️',
  act3: '➠ Reading  📖',
  act4: '➠ Writing 📝',
    
  resume: 'https://drive.google.com/file/d/1nMWCk3_-GdnrKuS5jlvfluEcVlVda0Fg/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ankita-srivastava-11b241146/',
    github: 'https://github.com/ankitasrivastava17',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: '{ Oppo Website }',
    img: 'https://i.imgur.com/YgpScDI.png',
    description:
      `Guangdong Oppo Mobile Telecommunications Corp., Ltd, doing business as OPPO is a Chinese state-owned consumer Electronics and Mobile communications company headquartered in Dongguan, Guangdong. Its major product lines include smartphone, smart devices, audio devices, power banks and other electronics products.`,
    stack: ['HTML |', 'CSS |','Javascript |', 'Local Storage '],
    sourceCode: 'https://github.com/mistrivishal/OPPO-India-Clone',
    livePreview: 'https://oppoindiaclone.netlify.app',
  },
  {
    name: '{ Overstock Website }',
    img: 'https://i.imgur.com/lOC0Vbp.png',
    description:
      'Overstock.com Inc. is an online retailer and technology company. The Company is an e-commerce retailer offering customers a range of brands for the home at low prices, including furniture, home decor, area rugs, bedding and bath, home improvement, outdoor, and kitchen and dining items, among others. It sells products and services through its Internet websites.',
    stack: ['HTML |', 'CSS |','Javascript |','Local Storage'],
    sourceCode: 'https://github.com/prashant1307/overstock_clone.git',
    livePreview: 'https://radiant-fairy-66db6d.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Java',
  'SQL',
  'Data Structure',
  'Algorithm',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'as342714@gmail.com',
  info: `My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you ! Feel free to mail me about any relevant query.`,
}

export { header, about, projects, skills, contact }
