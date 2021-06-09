export function csvCellFormatter(value: any, type: string) {
  if (!value) {
    return value;
  }
  switch (type) {
    case 'SP.FieldUrl':
      if(value.props){
        value = value.props.children;
      }
      break;
    case 'SP.FieldUser':
      if(value.props)
        value = value.props.displayName;
      break;
    default:
      break;
  }
  return value;
}

