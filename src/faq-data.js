import {
  FaShoppingCart,
  FaGift,
  FaUndo,
  FaUserCircle,
  FaQuestionCircle,
} from "react-icons/fa";

const faqData = [
  {
    id: 1,
    sectionName: "Ordering",
    sectionTagline: "Questions about ordering",
    sectionIcon: <FaShoppingCart />,
    sectionFaqs: [
      {
        id: 1,
        question: "What comes with the helmet?",
        answer:
          "Our helmets come as an entire system, including fully ventilated magnetic goggles, magnetic Nastek lenses, a mask thats impact tested to -20 degrees, X-visor and a camera mount which is underneath the visor. 2018/19 helmets also have build in Recco avalanche rescue technology, and a Rheon impact liner",
      },
      {
        id: 2,
        question: "Are ruroc helmets stocked in any physical stores?",
        answer:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est enim pariatur atque eum veritatis, harum sed assumenda deserunt quod saepe, fuga nisi praesentium dolor eligendi doloremque corrupti nesciunt consectetur. Illum!",
      },
      {
        id: 3,
        question: "I have received a defective product, what shall i do?",
        answer:
          "We are so sorry to hear you have received a defective product from us. Don't worry we can sort it, simply contact our Customer Experience team! They will need your order number; a brief description of the issue and some photos of the defect. You can reach our Customer Experience on the following email address: info@ruroc.com",
      },
      {
        id: 4,
        question: "can i amend my order after i placed it?",
        answer:
          "If you do need to make changes to your order please contact us ASAP! We will try our best to amend it for you before it ships out.",
      },
      {
        id: 5,
        question:
          "what should i do if there is a payment error when im trying to order?",
        answer:
          "It sounds like you need to contact your bank to authorise the international payment (sometimes the bank will set up a safety feature to prevent fraud on your account). When you go to re-order don't hesitate to contact us for confirmation, we will be able to check the order has gone through. Equally if you're still having issues with payment please email our team and we will try our best to sort it out!",
      },
      {
        id: 6,
        question: "can you ship to a po box or apo addresses?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat ullam ipsam dolore sunt deserunt, dolores, consectetur numquam eligendi id veniam atque aspernatur vel, amet esse dignissimos inventore! Distinctio, autem? Aspernatur expedita dolorem dicta quo culpa accusantium obcaecati? Blanditiis nobis ex unde nisi omnis sunt culpa rem deleniti eius at!",
      },
    ],
  },
  {
    id: 2,
    sectionName: "Using the product",
    sectionTagline: "know-hows & what ifs",
    sectionIcon: <FaGift />,
    sectionFaqs: [
      {
        id: 1,
        question: "Kif might! How much did you make me?",
        answer:
          "Or a guy who burns down a bar for the insurance money! With a warning label this big, you know they gotta be fun! I am the man with no name, Zapp Brannigan! Ah, computer dating. It's like pimping, but you rarely have to use the phrase upside your head.",
      },
      {
        id: 2,
        question: "Who am I making this out to?",
        answer:
          "With gusto. Wow! A superpowers drug you can just rub onto your skin? You'd think it would be something you'd have to freebase. My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.",
      },
      {
        id: 3,
        question: "Oh God, what have I done?",
        answer:
          "s today's hectic lifestyle making you tense and impatient? Why not indeed! We can't compete with Mom! Her company is big and evil! Ours is small and neutral! Oh Leela! You're the only person I could turn to; you're the only person who ever loved me.",
      },
      {
        id: 4,
        question: "Hey, whatcha watching?",
        answer:
          "I've been there. My folks were always on me to groom myself and wear underpants. What am I, the pope? Now, now. Perfectly symmetrical violence never solved anything. Is the Space Pope reptilian!?",
      },
      {
        id: 5,
        question: "Can I use the gun?",
        answer:
          "Interesting. No, wait, the other thing: tedious. My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.",
      },
      {
        id: 6,
        question: "How much did you make me?",
        answer:
          "The key to victory is discipline, and that means a well made bed. You will practice until you can make your bed in your sleep. Ooh, name it after me! What are their names? I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.",
      },
    ],
  },
  {
    id: 3,
    sectionName: "returns",
    sectionTagline: "how to return",
    sectionIcon: <FaUndo />,
    sectionFaqs: [
      {
        id: 1,
        question: " Lorem ipsum dolor sit.",
        answer:
          "Our helmets come as an entire system, including fully ventilated magnetic goggles, magnetic Nastek lenses, a mask thats impact tested to -20 degrees, X-visor and a camera mount which is underneath the visor. 2018/19 helmets also have build in Recco avalanche rescue technology, and a Rheon impact liner",
      },
      {
        id: 2,
        question: "Are ruroc helmets stocked in any physical stores?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat ullam ipsam dolore sunt deserunt, dolores, consectetur numquam eligendi id veniam atque aspernatur vel, amet esse dignissimos inventore! Distinctio, autem? Aspernatur expedita dolorem dicta quo culpa accusantium obcaecati? Blanditiis nobis ex unde nisi omnis sunt culpa rem deleniti eius at!",
      },
      {
        id: 3,
        question:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum!",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat ullam ipsam dolore sunt deserunt, dolores, consectetur numquam eligendi id veniam atque aspernatur vel, amet esse dignissimos inventore! Distinctio, autem? Aspernatur expedita dolorem dicta quo culpa accusantium obcaecati? Blanditiis nobis ex unde nisi omnis sunt culpa rem deleniti eius at!",
      },
      {
        id: 4,
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat ullam ipsam dolore sunt deserunt, dolores, consectetur numquam eligendi id veniam atque aspernatur vel, amet esse dignissimos inventore! Distinctio, autem? Aspernatur expedita dolorem dicta quo culpa accusantium obcaecati? Blanditiis nobis ex unde nisi omnis sunt culpa rem deleniti eius at!",
      },
      {
        id: 5,
        question: "Lorem ipsum dolor sit amet consectetur.",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat ullam ipsam dolore sunt deserunt, dolores, consectetur numquam eligendi id veniam atque aspernatur vel, amet esse dignissimos inventore! Distinctio, autem? Aspernatur expedita dolorem dicta quo culpa accusantium obcaecati? Blanditiis nobis ex unde nisi omnis sunt culpa rem deleniti eius at!",
      },
      {
        id: 6,
        question:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eos. Nam, dolorum.",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat ullam ipsam dolore sunt deserunt, dolores, consectetur numquam eligendi id veniam atque aspernatur vel, amet esse dignissimos inventore! Distinctio, autem? Aspernatur expedita dolorem dicta quo culpa accusantium obcaecati? Blanditiis nobis ex unde nisi omnis sunt culpa rem deleniti eius at!",
      },
    ],
  },
  {
    id: 4,
    sectionName: "your account",
    sectionTagline: "problems with your account",
    sectionIcon: <FaUserCircle />,
    sectionFaqs: [
      {
        id: 1,
        question: "how can i change my password?",
        answer:
          "You can change your password by following the 'password recovery' link next to your login. If you need any help drop us an email and we can change it for you; info@ruroc.com",
      },
      {
        id: 2,
        question: "how can i change my shipping address?",
        answer:
          "You can change your address by logging into your account. If you need to change your address after you purchase please contact our customer service team, providing its not been shipped and it's in the same country we can change it for you.",
      },
      {
        id: 3,
        question: "my order says 'processing' what does this mean?",
        answer:
          "This means your payment has gone through and the order is being processed. You will receive a confirmation email shortly, welcome to the team 😎",
      },
      {
        id: 4,
        question: "how do i check the status of my order?",
        answer:
          "You can check the status of your order by logging into your account and clicking on ‘order history and details’. Please don’t hesitate to drop us a message if you need further assistance.",
      },
      {
        id: 5,
        question: "I placed my order as a guest, how do i check the status?",
        answer:
          "If you placed your order using a guest account you can still have access to your order information. Just follow this link to access our 'Guest order tracker'",
      },
    ],
  },
  {
    id: 5,
    sectionName: "misc.",
    sectionTagline: "other popular questions",
    sectionIcon: <FaQuestionCircle />,
    sectionFaqs: [
      {
        id: 1,
        question: "Do you offer any discounts?",
        answer:
          "Our helmets come as an entire system, including fully ventilated magnetic goggles, magnetic Nastek lenses, a mask thats impact tested to -20 degrees, X-visor and a camera mount which is underneath the visor. 2018/19 helmets also have build in Recco avalanche rescue technology, and a Rheon impact liner",
      },
      {
        id: 2,
        question: "Are ruroc helmets stocked in any physical stores?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat ullam ipsam dolore sunt deserunt, dolores, consectetur numquam eligendi id veniam atque aspernatur vel, amet esse dignissimos inventore! Distinctio, autem? Aspernatur expedita dolorem dicta quo culpa accusantium obcaecati? Blanditiis nobis ex unde nisi omnis sunt culpa rem deleniti eius at!",
      },
      {
        id: 3,
        question:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nostrum!",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat ullam ipsam dolore sunt deserunt, dolores, consectetur numquam eligendi id veniam atque aspernatur vel, amet esse dignissimos inventore! Distinctio, autem? Aspernatur expedita dolorem dicta quo culpa accusantium obcaecati? Blanditiis nobis ex unde nisi omnis sunt culpa rem deleniti eius at!",
      },
      {
        id: 4,
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat ullam ipsam dolore sunt deserunt, dolores, consectetur numquam eligendi id veniam atque aspernatur vel, amet esse dignissimos inventore! Distinctio, autem? Aspernatur expedita dolorem dicta quo culpa accusantium obcaecati? Blanditiis nobis ex unde nisi omnis sunt culpa rem deleniti eius at!",
      },
      {
        id: 5,
        question: "Lorem ipsum dolor sit amet consectetur.",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat ullam ipsam dolore sunt deserunt, dolores, consectetur numquam eligendi id veniam atque aspernatur vel, amet esse dignissimos inventore! Distinctio, autem? Aspernatur expedita dolorem dicta quo culpa accusantium obcaecati? Blanditiis nobis ex unde nisi omnis sunt culpa rem deleniti eius at!",
      },
      {
        id: 6,
        question:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eos. Nam, dolorum.",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat ullam ipsam dolore sunt deserunt, dolores, consectetur numquam eligendi id veniam atque aspernatur vel, amet esse dignissimos inventore! Distinctio, autem? Aspernatur expedita dolorem dicta quo culpa accusantium obcaecati? Blanditiis nobis ex unde nisi omnis sunt culpa rem deleniti eius at!",
      },
    ],
  },
];

export default faqData;
