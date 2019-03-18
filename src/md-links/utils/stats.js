export const linksUnique = (arrObjt) => {
    const newSetLinks = [...new Set(arrObjt.map((links) => links.href))];
    return newSetLinks.length;
  };

export const totalStast = (arrObjt) => {
    const arrObjtTotal = arrObjt.length
    return arrObjtTotal
};


export const brokenStats = (arrObjt) => {
        const arrayBroken = arrObjt.filter(link => link.statusText === 'FAIL').length;
        return arrayBroken;
};
