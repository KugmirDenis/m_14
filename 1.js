
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
   <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`

const parser = new DOMParser();
const xmlDom = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDom.querySelectorAll('student');
const nameNode = xmlDom.querySelectorAll('name');




const firstNode = nameNode[0].querySelector('first');
const secondNode = nameNode[0].querySelector('second');
const ageNode = studentNode[0].querySelector('age');
const profNode = studentNode[0].querySelector('prof');

const secondFirstNode = nameNode[1].querySelector('first');
const secondSeocndNode = nameNode[1].querySelector('second');
const secondAgeNode = studentNode[1].querySelector('age');
const seecondProfNode = studentNode[1].querySelector('prof');

const secondLangAttr = nameNode[1].getAttribute('lang');
const langAttr = nameNode[0].getAttribute('lang');

const list = [
  {
    name: firstNode.textContent + ' ' + secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr
  },
  {
    name: secondFirstNode.textContent + ' ' + secondSeocndNode.textContent,
    age: Number(secondAgeNode.textContent),
    prof: seecondProfNode.textContent,
    lang: secondLangAttr
  }
];

console.log('list:', list);