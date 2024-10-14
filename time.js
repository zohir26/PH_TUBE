const getTimeString = (time) => {
 const hour = parseInt(time/3600);
 const remainingSecond = time % 3600;
 const minute = parseInt(remainingSecond/60)
 const seconds= remainingSecond % 60;
    return `${hour} hour ${minute} minute ${seconds} seconds ago`
    }
