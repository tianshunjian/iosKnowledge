## iOS中常用的线程锁有哪些，分别具有哪些特点

- @synchronized 关键字加锁 递归锁，性能较差不推荐使用

- NSLock 互斥锁 不能多次调用 lock方法,会造成死锁

- NSRecursiveLock递归锁，NSRecursiveLock类定义的锁可以在同一线程多次lock，而不会造成死锁。递归锁会跟踪它被多少次lock。每次成功的lock都必须平衡调用unlock操作。只有所有的锁住和解锁操作都平衡的时候，锁才真正被释放给其他线程获得。

- NSConditionLock条件锁，顾名思义，这个锁对象有一个condition属性，只有condition的值相同，才能获取到该锁，并且执行解锁操作。

- POSIX互斥锁，POSIX是Unix/Linux平台上提供的一套条件互斥锁的API。用法和特点与NSLock类似。

- dispatch_semaphore信号量实现加锁，当信号量为0时，线程将会被卡死，通过信号量的增减来达到控制线程个数的目的。

- OSSpinLock自旋锁，用法类似于NSLock，可以自动检查线程锁是否已经打开，效率比较高，但是被证明不是线程安全的。

- GCD线程阻断dispatch\_barrier\_async/dispatch\_barrier\_sync，
	- dispatch\_barrier\_async/dispatch\_barrier\_sync在一定的程度上也可以做线程同步，会在线程队列中打断其他线程执行当前任务。两个的区别是dispatch\_barrier\_async阻塞的是当前队列的线程，而dispatch\_barrier\_sync阻塞的是任务所插入队列的线程。
