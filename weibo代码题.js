   dispatch_semaphore_t signal = dispatch_semaphore_create(1);  // 信号量为1
    dispatch_time_t overTime = dispatch_time(DISPATCH_TIME_NOW, 3 * NSEC_PER_SEC);
   
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
       
        dispatch_semaphore_wait(signal, overTime);  
        NSLog(@"需要线程同步的操作1 开始");
        sleep(2);
        NSLog(@"需要线程同步的操作1 结束");
        dispatch_semaphore_signal(signal);
    });

    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        sleep(1);
        dispatch_semaphore_wait(signal, overTime);
        NSLog(@"需要线程同步的操作2  ");
        dispatch_semaphore_signal(signal);
    });


dispatch_queue_t  aSerialQueue = dispatch_queue_create(“xxx_name",DISPATCH_QUEUE_SERIAL); 
    dispatch_async(aSerialQueue, ^(void) {
              //执行方法A   
             }); 
    dispatch_sync(aSerialQueue, ^(void) {
             //执行方法A    
             }); 
    //执行方法A  