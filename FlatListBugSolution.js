To fix this, ensure you have a unique `key` for each item in your data array using the `keyExtractor` prop.  If performance is still an issue, consider implementing `getItemLayout` to improve scrolling.  Here's the corrected code:

```javascript
<FlatList
  data={data}
  keyExtractor={(item, index) => item.id.toString() || index.toString()}
  renderItem={({ item }) => <Text>{item.text}</Text>}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
/>
```

Where `ITEM_HEIGHT` is a constant representing the height of each item in the list.  Make sure your `data` array is correctly structured and doesn't change unexpectedly while the FlatList is rendering.