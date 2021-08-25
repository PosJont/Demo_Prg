using System;
using System.Data;
using System.Data.Linq;
using System.Data.Linq.Mapping;
using System.Globalization;
using System.Linq;
using Newtonsoft.Json;


public class Week{
    public Week(){
        DateTime dt = DateTime.Now ;
        DateTimeFormatInfo dfi = DateTimeFormatInfo.CurrentInfo;
        Calendar cal = dfi.Calendar;
        string week = new TaiwanCalendar().GetWeekOfYear(dt, System.Globalization.CalendarWeekRule.FirstDay, System.DayOfWeek.Sunday).ToString();

        Console.WriteLine("{0:d}: Week {1} ({2})", 
            dt,cal.GetWeekOfYear(dt, dfi.CalendarWeekRule,dfi.FirstDayOfWeek) , week);
    }

}