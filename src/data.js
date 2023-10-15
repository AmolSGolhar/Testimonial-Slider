const reviews = [
  {
    id: 1,
    name: "Amol Sominath Golhar",
    job: "Software Engineer",
    image: "https://media.licdn.com/dms/image/D5603AQFoY9exx_rSPw/profile-displayphoto-shrink_800_800/0/1681625923867?e=1696464000&v=beta&t=Yt6iGEvfRkCU0fYFgB6ii6UTMJevujpHDvR2hZ67tyg",
    text: "I have had the pleasure of working with this team on several projects, and I am consistently impressed with their technical expertise and ability to deliver quality solutions on time and within budget. They are a true partner and an asset to any project.",
  },
  {
    id: 2,
    name: "Sarvesh Hajare",
    job: "Graphic Designer",
    image: "https://media.licdn.com/dms/image/C5603AQHRQxKfFGvXJQ/profile-displayphoto-shrink_800_800/0/1661833126192?e=1696464000&v=beta&t=Ru2OXc2pZHgIg1EYh9-Dc5H7MbRLcxiPiEJzjXkUpZ4",
    text: "I have been working with this company for several years now, and I have always been impressed with their creativity and attention to detail. They are true professionals who take pride in their work and always go above and beyond to deliver exceptional results.",
  },
  {
    id: 3,
    name: "Samarth Kamble",
    job: "Hacker",
    image: "https://media.licdn.com/dms/image/D4E03AQGAMz611eO2Rg/profile-displayphoto-shrink_800_800/0/1689779271196?e=1696464000&v=beta&t=ovEdh6T0h987BCGaChWMARXj7Uw-UBWoxkxInfcy7eI",
    text: "I am thrilled with the results of our recent marketing campaign, and it wouldn't have been possible without the hard work and dedication of the entire team. Thank you for your exceptional work!",
  },
  {
    id: 4,
    name: "Shivam Jagadale",
    job: "Trade Master",
    image: "https://media.licdn.com/dms/image/D4D03AQFh44yYWN7fAA/profile-displayphoto-shrink_800_800/0/1677219148183?e=1696464000&v=beta&t=Z-ErzOyLYWOAiU_ZLlqWd-tqPMAkNKQDy8qXMZyVHu4",
    text: "I have worked with many content creators over the years, but none have impressed me as much as this team. They have a knack for crafting compelling and engaging content that resonates with our audience and drives real results. I highly recommend them!",
  },
  {
    id: 5,
    name: "Harshad Bankar",
    job: "Python programmer",
    image: "https://media.licdn.com/dms/image/D4D03AQGd2YSsbAFw_Q/profile-displayphoto-shrink_800_800/0/1690523802377?e=1696464000&v=beta&t=Zi572LrU_CO1-pLr0mQRGc_CkWAdZObH7TUO-k1L8Dk",
    text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them.",
  },
  {
    id: 6,
    name: "Sanket Bendale",
    job: "Newtorking Engineer",
    image: "https://media.licdn.com/dms/image/C4D03AQFUdhGeY-uULg/profile-displayphoto-shrink_800_800/0/1641801954847?e=1696464000&v=beta&t=uLvSIR3kTcx8jEPscRZDCe3hH1OaD5qgbfVwQILA1MI",
    text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them.",
  },
  {
    id: 7,
    name: "Shreyas Raijade",
    job: "django Developer",
    image: "https://media.licdn.com/dms/image/D4D03AQFOcLEJObBcRA/profile-displayphoto-shrink_800_800/0/1666837280511?e=1696464000&v=beta&t=TKo5xtIHBtSnNCMaTahh8gQ9OIizKcyOkbyDnP7Favc",
    text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them.",
  },
  {
    id: 8,
    name: "Sanket Patil",
    job: "Data Analyst",
    image: "https://media.licdn.com/dms/image/D5603AQFAZd1HASHISw/profile-displayphoto-shrink_800_800/0/1677748154275?e=1696464000&v=beta&t=hN8Ku1vmw7h8FRT6a741O9pa6VgURtJ-ABBQQQlAPyk",
    text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them.",
  },
  {
    id: 9,
    name: "Pranav Phatale",
    job: "Front End developer",
    image: "https://media.licdn.com/dms/image/C4E03AQEX9wnMcjhFLw/profile-displayphoto-shrink_800_800/0/1657858444786?e=1696464000&v=beta&t=EaLHJ2r_IYATCTsiutgFaioJ2zFMvgRxLEGgG7ZeMmA",
    text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them.",
  },
  {
   
    id: 10,
    name: "Vaibhav ekshinge",
    job: "Trade analyist",
    image: " https://media.licdn.com/dms/image/D5603AQEmQx__scMZ6g/profile-displayphoto-shrink_800_800/0/1689224856963?e=1696464000&v=beta&t=rHpoNPynj7b7-fxUXNuQrDgTT_yXDRQhS2nLWJ7lmcE",
    text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them."
  },
  {
    id: 11,
    name: "sahil Pharanda",
    job: "Big Bull",
    image: "https://media.licdn.com/dms/image/C4E03AQEX9wnMcjhFLw/profile-displayphoto-shrink_800_800/0/1657858444786?e=1696464000&v=beta&t=EaLHJ2r_IYATCTsiutgFaioJ2zFMvgRxLEGgG7ZeMmA",
    text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them."
  },
  {
    id: 12,
    name: "Abhishek Ghorpade",
    job: "Data Scientist",
    image: "https://media.licdn.com/dms/image/D4D03AQGnEo11n5nUzw/profile-displayphoto-shrink_400_400/0/1678598343410?e=1696464000&v=beta&t=INz2QLumJNj6g3m9HppjNLaO6v0JaqkuoeQoqKQw5wI",
    text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them."
  },
];

export default reviews;
