﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Homer_Seed_Project_NET_Core_1_0.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
