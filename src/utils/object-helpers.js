export const updateObjectInArray = (items, itemId,objectPropName, newObjectProps) => {
    return items.map(item => {
        if(item[objectPropName] === item)
            return {...item, ...newObjectProps};
        return item;
    })
}
