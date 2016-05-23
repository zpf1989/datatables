var index = {
    grid: $('#empGrid'),
    initGrid: function() {
        //初始化表格
        var table = index.grid.dataTable({
            autoWidth: true,
            deferRender: true,//延迟渲染
            scrollY: '380px',//强制DataTable为指定的高度，并且会允许任何超出当前视口的数据进行滚动
            scrollX: true,
            scrollCollapse: true,
            searching: true,//禁用查询（使用自定义查询）
            dom: '<"toolbar left"><"right search">t<"left"l><"left"i><"right"p>',//自定义组件布局
            columns: [
                { data: 'Id', title: '主键', visible: false },
                { data: 'Code', title: '编号' },
                { data: 'Name', title: '姓名' },
                {
                    data: 'Gender',
                    title: '性别',
                    render: function(data, type, full, meta) {
                        if (data == '1') {
                            return '男';
                        } else if (data == '0') {
                            return '女'
                        } else {
                            return '未知';
                        }
                    }
                },
                { data: 'BirthDay', title: '出生日期' },
                { data: 'Age', title: '年龄' },
                { data: 'Salary', title: '薪资' },
                { data: 'Org', title: '部门Id' },
                { data: 'OrgName', title: '部门' }
            ],
            fixedColumns: {
                leftColumns: 3,
                rightColumns: 1
            },
            rowId: 'Id',//设置行Id
            serverSide: true,
            processing: true,//载入数据的时候是否显示“载入中”,
            pagingType: 'full_numbers',//首页、上一页、数字列表、下一页、尾页
            pageLength: 10,//首次加载的数据条数
            ordering: false,//禁止排序
            lengthChange: true,//允许修改分页大小
            ajax: {
                url: 'http://localhost/aspnet/Employees/Handlers/GetAllEx.ashx',//注意跨域问题
                type: 'get',
                dataSrc: 'data'
            },
            language: {
                search: '<span class="label label-success">搜索：</span>',//右上角的搜索文本，可以写html标签
                processing: "载入中",//处理页面数据的时候的显示
                lengthMenu: '<select class="form-control input-sm">' +
                '<option value="10">10</option>' +
                '<option value="20">20</option>' +
                '<option value="50">50</option>' +
                '<option value="100">100</option>' +
                '</select>',
                paginate: {//分页的样式文本内容。
                    previous: "上一页",
                    next: "下一页",
                    first: "首页",
                    last: "尾页"
                },
                zeroRecords: "暂无记录",//table tbody内容为空时，tbody的内容。
                //下面三者构成了总体的左下角的内容。
                info: "共 _PAGES_ 页|显示第 _START_ 到第 _END_ | 共 _MAX_ 条 ",//左下角的信息显示，大写的词为关键字。
                infoEmpty: "暂无数据！",//筛选为空时左下角的显示。
                infoFiltered: ""//筛选之后的左下角筛选提示
            }
        });
        // toolbar
        $("div.toolbar").css({ 'width': '100%' }).html('<input id="btnAdd" type="button" class="btn btn-primary btn-sm" value="新增"/>' +
            '<input id="btnSave" type="button" class="btn btn-primary btn-sm" value="保存"/>' +
            '<input id="btnDelete" type="button" class="btn btn-danger btn-sm" value="删除"/>' +
            '<form class="right"><div class="form-group form-inline">' +
            '<input type="text" name="Name" style="width:120px;" class="form-control" placeholder="姓名">' +
            '<input type="text" name="OrgName" style="width:120px;"  class="form-control" placeholder="部门">' +
            '<input type="button" name="Name" class="btn btn-success btn-sm" value="查询">' +
            '</div></form>');
        // 组件格式化
        $('.left').css({ 'float': 'left', 'margin-right': '20px' });
        $('.right').css({ 'float': 'right' });
        $("div.toolbar *,div.search *").css({ 'margin-left': '4px' });
    }
};