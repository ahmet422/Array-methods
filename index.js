    // ## Array Cardio Day 2

    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      const isAdult = people.some(p => (2020 - p.year) > 19);
      console.log(isAdult);
      // Array.prototype.every() // is everyone 19 or older?
      const everyoneISAdult = people.every(p => ((new Date()).getFullYear() - p.year) > 19);
      console.log(everyoneISAdult);
  
      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
      const neededId = comments.find(obj => obj.id == 823423);
      console.log(neededId);
      // Array.prototype.findIndex()
      // Find the comment with this ID
      const index = comments.findIndex(obj => obj.id == 823423);
      console.log(index);
      // delete the comment with the ID of 823423
      console.table(comments);
      comments.splice(index,1);
      // delete comments[index];
      // const newArr = [...comments];
      console.table(comments);
      // console.table(newArr);