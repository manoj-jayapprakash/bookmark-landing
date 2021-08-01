import './FAQ.css';

import { QnA } from './QnA';

export const FAQ = () => {
  const qNa = [
    {
      id: '1',
      question: 'What is Bookmark?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    },
    {
      id: '2',
      question: 'How can I request a new browser?',
      answer:
        'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
    {
      id: '3',
      question: 'Is there a mobile app?',
      answer:
        'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
    },
    {
      id: '4',
      question: 'What about other Chromium browsers?',
      answer:
        'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    },
  ];
  return (
    <section className="faq container">
      <div className="section__head">
        <h2 className="section__title">Frequently Asked Questions</h2>
        <p className="section__description">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="section__body faqs">
        {qNa.map((q) => (
          <QnA key={q.id} question={q.question} answer={q.answer} />
        ))}
      </div>
      <button className="btn btn-blue">More Info</button>
    </section>
  );
};
