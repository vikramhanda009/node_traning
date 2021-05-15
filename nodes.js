const chalk = require("chalk");
const fs = require("fs");
const getNodes =  () => {
    return 'hi node function'
}
const addNote =  (title, body) =>{
    const notes = loadNotes();
    const duplicateNote = notes.find((note)=> note.title === title)
    
    if(!duplicateNote){
        notes.push({title :title,body:body});
    console.log(notes)
    saveNotes(notes);
    console.log('new note add')
    } else {
        console.log('note title taken')
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>note.title !== title);
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('note remove'))
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.red.inverse('no note remove'))  
    }
   
    
}
const saveNotes = (notes)=> {
const DataJSON  = JSON.stringify(notes)
fs.writeFileSync('notes.json',DataJSON);
} 
const loadNotes = ()=> {
    try {
    const dataBuffer = fs.readFileSync('notes.json');
    const DataJSON = dataBuffer.toString();
    return JSON.parse(DataJSON);
    } catch (e) {
       return []; 
    }
    
} 
const listNotes = ()=> {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.inverse.yellow(note.title))
    });
    
}
const readNote = (title)=> {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse.bgBlackBright(note.title))
        console.log(chalk.inverse.redBright(note.body))
    } else {
        console.log(chalk.inverse.bgBlue("note not found"))
    }
}


// console.log(getNodes);
module.exports = {
    "getNodes" : getNodes,
    "addNote"  : addNote,
    "removeNote"  : removeNote,
    "listNotes" :listNotes,
    "readNote" :readNote
};