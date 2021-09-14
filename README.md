# TL;DR

- graphql-jit helps
- apollo-server adds overhead
- tracing resolvers kills performance
- type-graphql adds overhead

# Explanation

For further details, please check out [this video](https://www.youtube.com/watch?v=JbV7MCeEPb8).

# Usage

```
git clone https://github.com/benawad/benchmarks
cd benchmarks
npm install
npm start
```

# Benchmarks
duration: 5s
connections: 5
pipelining: 1

| Server                                                                                                                                                          | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                                             | --:        | :-:     | --:           |
| [apollo-server-express+graphql-jit](https://github.com/mypolat/node-graphql-benchmarks/tree/apollo-server-express-variants/benchmarks/apollo-server-express+graphql-jit.js)             | 2281.8     | 1.67    | 14.45         |
| [apollo-server-express+graphql-jit+async](https://github.com/mypolat/node-graphql-benchmarks/tree/apollo-server-express-variants/benchmarks/apollo-server-express+graphql-jit+async.js) | 2268.6     | 1.68    | 14.36         |
| [apollo-server-express](https://github.com/mypolat/node-graphql-benchmarks/tree/apollo-server-express-variants/benchmarks/apollo-server-express.js)                                     | 1784.0     | 2.21    | 11.30         |
| [apollo-server-express+async](https://github.com/mypolat/node-graphql-benchmarks/tree/apollo-server-express-variants/benchmarks/apollo-server-express+async.js)                         | 1766.8     | 2.27    | 11.19         |
| [apollo-server-express-tracing](https://github.com/mypolat/node-graphql-benchmarks/tree/apollo-server-express-variants/benchmarks/apollo-server-express-tracing.js)                     | 871.2      | 5.19    | 27.73         |
