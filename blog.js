
    

const faqItems = [
  {
    ques:'What is the Document Object Model (DOM)?',
    ans:'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page'
  },
  {
    ques:'How do you select an element from the DOM?',
    ans:'The getElementById() method of the Document interface returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they are a useful way to get access to a specific element quickly'
  },
  {
    ques:'What is event delegation in the context of the DOM, and why is it useful?',
    ans:'Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future'
  },
  {
    ques:'How do you manipulate an elements attributes and styles using the DOM?',
    ans:'If you want to change other attributes like id , href , or src , you can use the setAttribute() method. The setAttribute() method accepts two arguments: The name of the attribute to set. The value of the attribute to set.'
  }
];
for(const faqItem of faqItems){
  const blogPara = document.getElementById('blogPara');
    const div = document.createElement('div');
    div.classList.add('history');
    div.innerHTML = `
    <h1 class="font-bold text-xl my-5">${faqItem.ques}</h1>
    <p class="text-sm text-slate-500">Date:${faqItem.ans} </p>
    `
    blogPara.appendChild(div);
  }

    