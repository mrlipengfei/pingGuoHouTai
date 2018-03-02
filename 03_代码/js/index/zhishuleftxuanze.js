$(function(){ 

	//alert($("#menu_flag").val());
	//var menu_flag = $("#menu_flag").val();
	//var header_flag = $("#header_flag").val();
	var list = null;
	var qingxilist = null;
	var xitonglist = null;
	//$("#leftBar").html("");
	var temp_id = "";
	//var htmlStr = "";
	
	$.ajax({
		url: "/indexproduct/weight/zhishuwelcome",
		async:false,
		type: 'post',
		success: function(result) {
//			for(var key in result){
//				$("#"+key).show();
//			}
			//console.log(result);

			//console.log(list);
			
			var flagadmin="";
			$.ajax({
				url: "/indexproduct/weight/huoquadmin",
				async:false,
				type: 'post',
				success: function(resultlist) {
					if(resultlist !=null){
						for(var i=0;i<resultlist.length;i++)
				    	{
				    	  if(resultlist[i] =="ROLE_ADMIN")
				    	  {
				    		  flagadmin =resultlist[i];
				    	  }
				    	}
					}
				}
				});
			if(flagadmin=="ROLE_ADMIN")
			{
				
				$('#zhishuwelcome').attr('href','/indexproduct/indexQueryAction'); 
				$('#qingxiwelcome').attr('href','/dataCenter/resourcePreManage'); 
				$('#dataManage').attr('href','/sysModule/getAllSysModule'); 
			}
			else if(flagadmin !="ROLE_ADMIN")
			{
				
				list = result.二百指数管理;
				if(list != null){
					for(var i=0;i<list.length;i++)
					{
						if(list[i].type == 3){
							//var htmlStr = "<li><a href='"+item.url+"'>"+item.moduleName+"</a></li>";
							$('#zhishuwelcome').attr('href',list[i].url); 
							  break;
						}
					}
		    	
				}
				
				qingxilist = result.数据清洗管理;
				if(qingxilist != null){
					for(var i=0;i<qingxilist.length;i++)
					{
						if(qingxilist[i].type == 3){
							//var htmlStr = "<li><a href='"+item.url+"'>"+item.moduleName+"</a></li>";
							$('#qingxiwelcome').attr('href',qingxilist[i].url); 
							break ;
						}
					}
					var source = $('#qingxiwelcome').attr("href");
					if(source =="")
					{
						for(var i=0;i<qingxilist.length;i++)
						{
							if(qingxilist[i].type == 2){
								//var htmlStr = "<li><a href='"+item.url+"'>"+item.moduleName+"</a></li>";
								$('#qingxiwelcome').attr('href',qingxilist[i].url); 
								break ;
							}
						}
					}
				}
				debugger;
				xitonglist=result.系统管理
				if(xitonglist != null){
					for(var i=0;i<xitonglist.length;i++)
					{
						if(xitonglist[i].type == 2){
							if(xitonglist[i].moduleName=="用户管理")
							{
								$('#dataManage').attr('href',"/sysUser/getAllSysUser"); 
								break;
							}
							if(xitonglist[i].moduleName=="角色管理")
							{
								$('#dataManage').attr('href',"/sysRole/getAllSysRole"); 
								break;
							}
							if(xitonglist[i].moduleName=="功能管理")
							{
								$('#dataManage').attr('href',"/sysModule/getAllSysModule"); 
								break;
							}
							if(xitonglist[i].moduleName=="日志管理")
							{
								$('#dataManage').attr('href',"/sysLog/getAllSysLog"); 
								break;
							}
							
							
							  
						}
					}
		    	
				}
		    } else {
		    	//zhiguang  解决login页面console报错
		    	console.info("当前页面不加载menu");
		    }
			
		}
	});
});

