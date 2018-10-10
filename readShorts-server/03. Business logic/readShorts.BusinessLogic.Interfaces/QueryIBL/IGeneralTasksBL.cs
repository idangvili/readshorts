﻿using readShorts.Models.Commands;
using readShorts.Models.Queries;
using readShorts.Models.ViewModels;

namespace readShorts.BusinessLogic.Interfaces
{
    public interface IGeneralTasksBL : IBaseBL
    {
        /// <summary>
        /// Returns the entered user's data
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        GeneralTasksViewModel Execute(GeneralTasksQuery query);
        GeneralTasksViewModel Execute(GeneralTasksCommand query);

    }
}
