   
    var setting = {
    		view: {
    	dblClickExpand: false,		
    	showIcon: false,
    	addDiyDom:addDiyDom
    },
    data: {
    	simpleData: {
    		enable: true
    	}
    },
    edit: {
    	enable: true,
    	showRemoveBtn: false,
    	showRenameBtn: false
    },
    callback: {
    	//onRightClick: OnRightClick,
    //	onClick: zTreeOnClick,
    	onClick: zTreeOnDblClick,
    	beforeClick: zTreeBeforeClick,
    	beforeDrag:function(){return false;} //禁止拖拽
    	//onDrop: zTreeOnDrop
    }
    };
    
   function zTreeBeforeClick (treeId, treeNode, clickFlag)
   {
	   var zTree = $.fn.zTree.getZTreeObj("lidiv");
	   zTree.expandNode(treeNode);
   } 
   function xiugaizTreeBeforeClick (treeId, treeNode, clickFlag)
   {
	   var zTree = $.fn.zTree.getZTreeObj("xiugaidiv");
	   zTree.expandNode(treeNode);
   } 
   
   function zTreeOnDblClick()
   {
	   var zTree = $.fn.zTree.getZTreeObj("lidiv");

	   var srcNode = zTree.getSelectedNodes();

	   var isNode = srcNode[0];
	   debugger;
	   if(isNode.children !=undefined)
	   {
        if(isNode.children.length>0){
        	if(isNode.children[0].children==undefined){
        		for(var i=0;i<isNode.children.length;i++)
        		{
        			$("#"+isNode.children[i].tId+"").find("div").css("background", "url()");
        		}
        		
        	}
	   }
	   }
   }
    
   function updatezTreeOnDblClick()
   {
	   var zTree = $.fn.zTree.getZTreeObj("xiugaidiv");
	   var srcNode = zTree.getSelectedNodes();

	   var isNode = srcNode[0];
	   if(isNode.children !=undefined)
	   {
		    if(isNode.children.length){
	        	if(isNode.children[0].children==undefined){
	        		for(var i=0;i<isNode.children.length;i++)
	        		{
	        			$("#"+isNode.children[i].tId+"").find("div").css("background", "url()");
	        		}
	        		
	        	}
		   }
	   }
    
   }
   
    /**
     * 列表dom
     * 
     */
    function addDiyDom(treeId, treeNode) {
        var spaceWidth = 15;
        var liObj = $("#" + treeNode.tId);
        var aObj = $("#" + treeNode.tId + "_a");
        var switchObj = $("#" + treeNode.tId + "_switch");
        var icoObj = $("#" + treeNode.tId + "_ico");
        var spanObj = $("#" + treeNode.tId + "_span");
        aObj.attr('title','');
        aObj.append('<div></div>');
        var div = $(liObj).find('div').eq(0);
        switchObj.remove();
        spanObj.remove();
        icoObj.remove();
        div.append(switchObj);
        div.append(spanObj);
        var editStr = '';
        editStr += '<div >' + (treeNode.yi==null?'&nbsp;':treeNode.yi) + '</div>';
        editStr += '<div >' + (treeNode.er==null?'&nbsp;':treeNode.er )+ '</div>';
        editStr += '<div >' + (treeNode.san==null?'&nbsp;':treeNode.san )+ '</div>';
        editStr += '<div >' + (treeNode.si==null?'&nbsp;':treeNode.si )+ '</div>';
        editStr += '<div >' + (treeNode.wu==null?'&nbsp;':treeNode.wu )+ '</div>';
     //   editStr += '<div class="diy">' + formatHandle(treeNode) + '</div>';
        aObj.append(editStr);
    }
    
   var settingxiugai={
		   check: { 
			   				enable: true 
			  }, 

		view: {
			dblClickExpand: false,	
	    	showIcon: false,
	    	addDiyDom:xiugaiDiyDom
	    },
	    data: {
	    	simpleData: {
	    		enable: true
	    	}
	    },
	    edit: {
	    	enable: true,
	    	showRemoveBtn: false,
	    	showRenameBtn: false
	    },
	    callback: {
	    	//onRightClick: OnRightClick,
	    //	onClick: zTreeOnClick,
	    	beforeClick: xiugaizTreeBeforeClick,
	    	onClick: updatezTreeOnDblClick,
	    	beforeDrag:function(){return false;} //禁止拖拽
	    	//onDrop: zTreeOnDrop
	    }
	    };
   /**
    *   修改
    */
   function xiugaiDiyDom(treeId, treeNode) {
       var spaceWidth = 15;
       var liObj = $("#" + treeNode.tId);
       var aObj = $("#" + treeNode.tId + "_a");
       aObj.append('<div><input class="radio" type="radio"   name="xiugaichekbox" value='+treeNode.id+' ></div>');
       var switchObj = $("#" + treeNode.tId + "_switch");
       var icoObj = $("#" + treeNode.tId + "_ico");
       var spanObj = $("#" + treeNode.tId + "_span");
       aObj.attr('title','');
       aObj.append('<div></div>');
       var div = $(liObj).find('div').eq(1);
       switchObj.remove();
       spanObj.remove();
       icoObj.remove();
       div.append(switchObj);
       div.append(spanObj);
       //var spaceStr = "<span style='height:1px;display: inline-block;width:" + (spaceWidth * treeNode.level) + "px'></span>";
       //switchObj.before(spaceStr);
       var editStr = '';
       if(treeNode.yi ==="")
       {
    	   editStr += '<div >' + (treeNode.yi==null?'&nbsp;':treeNode.yi) + '</div>';
       }else
       {
    	   
    	     editStr += '<div ><input  type ="text" value =' + (treeNode.yi==null?'&nbsp;':treeNode.yi) + '></div>'
       }
       if(treeNode.er ==="" )
       {
    	   editStr += '<div >' + (treeNode.er==null?'&nbsp;':treeNode.er )+ '</div>';
       }else
       {
    	      editStr += '<div ><input  type ="text"  value =' + (treeNode.er==null?'&nbsp;':treeNode.er) + '></div>';
       }
       
       if(treeNode.san ==="" )
       {
    	   editStr += '<div >' + (treeNode.san==null?'&nbsp;':treeNode.san )+ '</div>';
       }else
       {
    	   editStr += '<div ><input    type ="text" value =' + (treeNode.san==null?'&nbsp;':treeNode.san) + '></div>';
       }
       
       if(treeNode.si ===""  )
       {
    	   editStr += '<div >' + (treeNode.si==null?'&nbsp;':treeNode.si )+ '</div>';
       }else
       {
    	   editStr += '<div ><input  type ="text" value =' + (treeNode.si==null?'&nbsp;':treeNode.si) + '></div>';
       }
       if(treeNode.wu ==="" ) 
       {
    	   editStr += '<div >' + (treeNode.wu==null?'&nbsp;':treeNode.wu )+ '</div>';
       }else
       {
    	   editStr += '<div ><input    type ="text" value =' + (treeNode.wu==null?'&nbsp;':treeNode.wu) + '></div>';
       }
       
/*       editStr += "<div><a  id='shanchuid' onclick=shanchufangfa('"+treeNode.id+"')     style='text-decoration: underline;'>删除</a></div>";
*/    
       //   editStr += '<div class="diy">' + formatHandle(treeNode) + '</div>';
       aObj.append(editStr);
       
    
       
       
   }
   
   

function  xiugaitijiao()
   {
	hide('cover','power-modify');
	//获取选中值的value
	var radiocheck = $("input[name='xiugaichekbox']:checked").val(); 
	if(radiocheck ==undefined)
	{
		window.location.reload();
	  return false;	
	}	
	var reg = /^[0-9]+.?[0-9]*$/;//用来验证数字，包括小数的正则
	var ids ="";
	var valus1=$("input[name='xiugaichekbox']:checked").parent().next().next().find("input:text").val();    
	var valus2=$("input[name='xiugaichekbox']:checked").parent().next().next().next().find("input:text").val();    
	var valus3=$("input[name='xiugaichekbox']:checked").parent().next().next().next().next().find("input:text").val();    
	var valus4=$("input[name='xiugaichekbox']:checked").parent().next().next().next().next().next().find("input:text").val();    
	var valus5=$("input[name='xiugaichekbox']:checked").parent().next().next().next().next().next().next().find("input:text").val();   
	if(valus1 ==undefined){
		valus1=0;
	}else
	{
		if(!reg.test(valus1)){
			alert("请输入正确的数字格式！");
			return false;
		}
	}
	if(valus2 ==undefined){
		valus2=0;
	}else
	{
		if(!reg.test(valus2)){
			alert("请输入正确的数字格式！");
			return false;
		}
	}
	if(valus3 ==undefined){
		valus3=0;
	}else{
		if(!reg.test(valus3)){
			alert("请输入正确的数字格式！");
			return false;
		}
	}
	if(valus4 ==undefined){
		valus4=0;
	}else
	{
		if(!reg.test(valus4)){
			alert("请输入正确的数字格式！");
			return false;
		}
	}
	if(valus5 ==undefined){
		valus5=0;
	}else
	{
		if(!reg.test(valus4)){
			alert("请输入正确的数字格式！");
			return false;
		}
	}
	var valus=parseFloat(valus1)+parseFloat(valus2)+parseFloat(valus3)+parseFloat(valus4)+parseFloat(valus5);
	
	var radioArr = [];
	var radioFlag = $("input[name='xiugaichekbox']:checked").closest("ul").find("input[type=text]").each(function(){
		if ($(this).val() != undefined) {
			radioArr.push($(this).val());
		}
	})
	var shu=0;
	for(var i=0;i<radioArr.length;i++)
	{
		shu=shu+Number(radioArr[i]);
	}
	
	if(shu>100)
	{
		alert("权重数值不能超过100!");
		return false;
	}
	
	
		//主页查询方法
		$.ajax({
				url:"/indexproduct/weight/updateweight",
					data:{"ids":radiocheck,"valus":valus},//这里和上面不同，向页面传入了参数
					type:"post",
				dataType:"JSON",
				success:function(data)
					{
						if(data == '1')
						{
							window.location.reload();
	        			}
			
					}


			});
   }
   
function  shanchufangfa(treeNodeid)
   {
	 //  $("#shanchuid").parent().parent().parent().remove();
	   
		$.ajax({
			url:"/indexproduct/weight/deleteWeigh",
				data:{"treeNodeid":treeNodeid},//这里和上面不同，向页面传入了参数
				type:"post",
			dataType:"JSON",
			success:function(data)
				{
				debugger;
					if(data == '1')
					{
						alert("删除成功！");
						show('cover','power-modify'),xiugaifangfa();
					}
				}


		});
		changePop();
   }
   
    var zNodes=[];//[{ id:1,pId:3, name:"请右键新建节点", isParent:true, beiyong:0}];
    var znodesxiugai=[];
    var yjxzId;
    var yjxzPid;
    var yjxzName;
    var yjxzisParent;
    var yjxzOpen;
    var yjxzBeiyong;
    var addCount = 0;//判断新节点所加的位置0为子节点，1为前置同等级，2为后置同等级


$(function () {
	liebiao();
	
	selectonload();
		
    });

function liebiao()
{
	

	//列表方法
	var zhonglei="A";
	$.ajax({
		url:"/indexproduct/weight/getWeightList",
			data:{"zhonglei":zhonglei},//这里和上面不同，向页面传入了参数
			type:"post",
		dataType:"JSON",
		success:function(data)
			{
				if(data != null)
				{
					$(document).on("click", ".fake-body input" , function(){
		             	   $(this).focus();
		             	   $(this).val($(this).val());
		                })
					
					 //初始化列表
	                zTreeNodes=data;
	                //初始化树
	                $.fn.zTree.init($("#lidiv"), setting, zTreeNodes);
	                
	                
				}
			}


	});

}



function selectonload()
{
	
	//主页查询方法
	$.ajax({
			url:"/indexproduct/weight/getlikeleibie",
				//data:{"linids":linids},//这里和上面不同，向页面传入了参数
				type:"post",
			dataType:"JSON",
			success:function(data)
				{
					if(data != null)
					{
						$("#D1").append("<option value='1'>-----请选择-----</option>");
        			for(var i=0;i<data.length;i++){
        				$("#D1").append("<option value='"+data[i].index_type+"'>"+data[i].index_name+"</option>");
        			}
					}
		
				}


		});
}


function quanzhongchaxun()
{
	var selectval=$("#D1").val();
	if(selectval==1)
	{
		
		selectval="A";
	}
	$.ajax({
		url:"/indexproduct/weight/getWeightList",
			data:{"zhonglei":selectval},//这里和上面不同，向页面传入了参数
			type:"post",
		dataType:"JSON",
		success:function(data)
			{
				if(data != null)
				{
					 //初始化列表
	                zTreeNodes=data;
	                //初始化树
	                $.fn.zTree.init($("#lidiv"), setting, zTreeNodes);
				}
			}


	});

}

function chongzhi()
{
	$("#D1").val("");
	liebiao();
}


function xiugaifangfa()
{
	$("#D2").val("");
	$("#D3").val("");
	$("#quanzhongval").val("");
	var zhonglei="A";
	 selectval=$("#D1").val();
	 if(selectval !="1")
	 {
		 zhonglei =selectval;
	 }
	//列表方法
	$.ajax({
		url:"/indexproduct/weight/getWeightList",
			data:{"zhonglei":zhonglei},//这里和上面不同，向页面传入了参数
			type:"post",
		dataType:"JSON",
		success:function(data)
			{
				if(data != null)
				{
					 //初始化列表
	                zTreeNodes=data;
	                //初始化树
	                $.fn.zTree.init($("#xiugaidiv"), settingxiugai, zTreeNodes);
	                
	       

				}
			}


	});
	
	
	//修改类别查询方法
	$.ajax({
			url:"/indexproduct/weight/getlikeleibie",
				//data:{"linids":linids},//这里和上面不同，向页面传入了参数
				type:"post",
			dataType:"JSON",
			success:function(data)
				{
					if(data != null)
					{
						$("#D2").append("<option value=''>-----请选择-----</option>");
        			for(var i=0;i<data.length;i++){
        				var tyep_step=data[i].index_type+','+data[i].step+','+data[i].parent_index_type;
        				$("#D2").append("<option value='"+tyep_step+"'>"+data[i].index_name+"</option>");
        			}
					}
		
				}


		});

}
function chanpinmingchengfangfa()
{
	var selectval=$("#D2").val();
	var index_type="";
	var step="";
	var parent_index_type="";
	var strs =selectval.split(",");
	for(var i=0;i<strs.length;i++)
	{
		index_type=strs[0];
		step=strs[1];
		parent_index_type=strs[2];
		
	}
	$.ajax({
		url:"/indexproduct/weight/getlikemingcheng",
			data:{"zhonglei":index_type},//这里和上面不同，向页面传入了参数
			type:"post",
		dataType:"JSON",
		success:function(data)
			{
				if(data != null)
				{
					$("#D3").html("");
					for(var i=0;i<data.length;i++){
        				$("#D3").append("<option value='"+data[i].breedcode+"'>"+data[i].breed_name+"</option>");
        			}
				}
			}


	});
}

function guanbiceng()
{
	window.location.reload();
}

function xinzeng()
{
	var selectval=$("#D2").val();
	if(selectval =="")
	{
		return false;
	}
	var parent_index_type="";
	var step="";
	var strs =selectval.split(",");
	for(var i=0;i<strs.length;i++)
	{
		step=strs[1];
		parent_index_type=strs[2];
	}
	var index_type=$("#D3").val();
	var index_name=$("#D3").find("option:selected").text();
	var weight =$("#quanzhongval").val();
	
	
	$.ajax({
		url:"/indexproduct/weight/addweight",
			data:{"index_type":index_type,"index_name":index_name,"parent_index_type":parent_index_type,"weight":weight,"step":step},//这里和上面不同，向页面传入了参数
			type:"post",
		dataType:"JSON",
		success:function(data)
			{
				if(data != null)
				{
					if(data >100)
					{
						alert("权重值已超过100！请先修改权重值！");
						window.location.reload();
						return false;
					}
	                
					var step2="";
					var step3="";
					var step4="";
					var step5="";
					var step6="";
					
					var shu=parseInt(step)+1;
					if(shu==2)
					{
						step2='<input type="text" value =' + (weight==null?'&nbsp;':weight) + '>';
					}
					if(shu==3)
					{
						step3='<input  type="text" value =' + (weight==null?'&nbsp;':weight) + '>';
					}
					if(shu==4)
					{
						step4='<input  type="text" value =' + (weight==null?'&nbsp;':weight) + '>';
					}
					if(shu==5)
					{
						step5='<input type="text"  value =' + (weight==null?'&nbsp;':weight) + '>';
					}
					if(shu==6)
					{
						step6='<input type="text"  value =' + (weight==null?'&nbsp;':weight) + '>';
					}
					//添加时候拼接的str
	                var  str='';
	          	  str+=' <li><a class="newfile" ><div></div>';
	          	  str+='<div>'+index_name+'</div>';
	          	  str+=' <div>'+step2+'</div>';
	          	  str+=' <div>'+step3+'</div>';
	          	  str+=' <div>'+step4+'</div>';
	          	  str+=' <div>'+step5+'</div>';
/*	          	  str+=' <div>'+step6+'</div><div><span id="shanchuid"  onclick=shanchufangfa("'+index_type+'")  style="text-decoration: underline;">删除</span></div></a></li>';
*/	          	  $("#xiugaidiv").append(str);
	          	  
	          	changePop();
				}
			}


	});
	
}

