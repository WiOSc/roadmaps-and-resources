# Backend & Systems Roadmap

This track is about more than picking up a backend framework. The idea is to understand what's going on underneath a backend, and how that changes as you get more traffic and the system gets more complicated.

Each section has some topics to read up on, something to build, and a few resources. Try not to skip the build parts, that's where most of the learning happens.

---

## 1. Networking & HTTP

Figure out what actually happens when a client calls an API:

```text
DNS → TCP → TLS → HTTP → Server → Database → Response
```

### Topics

- IPs, ports and sockets
- TCP vs UDP
- The TCP handshake
- HTTP/1.1 and HTTP/2 basics
- Keep-alive and connection reuse
- Reverse proxies
- Basic Linux networking tools

### Build

Write a tiny HTTP server on top of raw TCP sockets, in **C or Go**.

### Resources

- [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/) (really good for sockets and TCP in C)
- *Computer Networking: A Top-Down Approach*

---

## 2. Go & Server Internals

Use Go to build backends without reaching for a framework right away.

### Topics

- `net/http`
- Goroutines and channels
- Mutexes
- Contexts and cancellation
- Timeouts
- Graceful shutdown
- Connection pools

### Build

Build an API using only the Go standard library. Some ideas:

- URL shortener
- Pastebin
- Key-value API

`net/http` already gives you the core HTTP server and client pieces, so you get to see how things work without a framework hiding it all.

### Resources

- [A Tour of Go](https://go.dev/tour/)
- [Go net/http docs](https://pkg.go.dev/net/http)
- *The Go Programming Language*

---

## 3. Concurrency & OS Concepts

Learn how a server deals with lots of requests at the same time.

### Topics

- Processes vs threads
- Goroutines
- Blocking vs non-blocking I/O
- Race conditions
- Mutexes and semaphores
- Deadlocks
- `select`, `poll` and `epoll`

### Build

Make a concurrent TCP chat server. Then try to break it with race conditions and fix them.

### Resources

- *Operating Systems: Three Easy Pieces*
- Beej's networking guide (same one as above)

---

## 4. Databases Under the Hood

Go further than just writing SQL queries.

### Topics

- Pages and disk storage
- B-Trees and indexes
- Transactions
- ACID
- Isolation levels
- Locks and deadlocks
- MVCC
- WAL

Postgres handles concurrency mostly through MVCC. Each transaction works off a snapshot of the data, which lets lots of them run at once without stepping on each other.

### Build

Add PostgreSQL to one of your earlier projects. Run the same query with and without an index and compare the two using:

```sql
EXPLAIN ANALYZE
```

### Resources

- PostgreSQL documentation
- *Database Internals* by Alex Petrov
- CMU Database Systems lectures

---

## 5. Build a Tiny Database

The best way to understand persistence is to build it yourself.

### Build

Support these commands:

```text
SET key value
GET key
DELETE key
```

Start with an in-memory hashmap, then add:

- An append-only log
- Persistence
- Recovery after a restart
- TTLs

Redis does persistence with snapshots and an append-only file too, so you'll be working with the same ideas real systems use.

---

## 6. Caching & Redis

### Topics

- Cache hits and misses
- TTL
- LRU and LFU
- Cache-aside
- Cache invalidation
- Cache stampede
- Hot keys

### Build

Put Redis in front of Postgres:

```text
API
 ↓
Redis
 ↓
Postgres
```

Then benchmark it with and without the cache and see how much it helps.

### Resources

- Redis documentation
- *Designing Data-Intensive Applications*

---

## 7. Queues & Background Jobs

Not everything needs to happen inside a single HTTP request. This section is about why.

### Topics

- Producers and consumers
- Queues
- Workers
- Retries
- Dead-letter queues
- Idempotency
- At-most-once vs at-least-once delivery

Tools worth looking at: Kafka, RabbitMQ, NATS, SQS.

### Build

```text
POST /signup
       ↓
    Queue
   /  |   \
email logs analytics
```

---

## 8. Performance & Scaling

Find out where your bottlenecks are before you start throwing more servers at the problem.

### Topics

- Latency vs throughput
- RPS
- p50, p95 and p99
- CPU vs I/O bottlenecks
- Profiling
- Load testing

Tools: k6, wrk, hey.

### Build

Keep increasing the load on your server until it falls over, then figure out **why** it did.

---

## 9. Distributed Backend Systems

At some point one server isn't enough:

```text
          Load Balancer
         /      |      \
      API-1   API-2   API-3
```

### Topics

- Horizontal vs vertical scaling
- Stateless servers
- Load balancing
- Health checks
- Read replicas
- Replication lag
- Partitioning
- Sharding
- Consistency
- Leader/follower setups
- Network failures
- CAP theorem
- Basics of Raft and consensus

### Resources

- *Designing Data-Intensive Applications* by Martin Kleppmann

If you only read one book for the second half of this roadmap, make it this one.

---

## Final Project

Build one backend and keep adding to it as you go:

```text
Simple API
↓
PostgreSQL
↓
Redis
↓
Background workers
↓
Load testing
↓
Multiple API instances
↓
Load balancer
↓
DB replicas / partitioning
↓
Monitoring + failure testing
```

You don't need to use every technology out there. What matters is that you can explain **why each piece is there and what problem it solves**.
