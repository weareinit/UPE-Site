import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

export default{
name:'richText',
type: 'array',
of:[{type: 'block'}]
}