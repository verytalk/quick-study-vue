<template>

    <div>
        <el-form :inline="true" :model="query" class="query-form" size="mini">
            <el-form-item class="query-form-item">
                <el-input v-model="query.word" placeholder="单词"></el-input>
            </el-form-item>

            <el-form-item class="query-form-item">
                <el-select v-model="query.type" placeholder="课程">
                    <el-option label="全部课程" value=""></el-option>
                    <el-option v-for="item in types" :label="item.typeName" :value="item.id"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-refresh" @click="onReset"></el-button>
                    <el-button type="primary" icon="search" @click="onSubmit">查询</el-button>
                    <!--<el-button type="primary" @click.native="handleForm(null,null)">新增</el-button>-->
                </el-button-group>
            </el-form-item>
        </el-form>
        <el-table
            v-loading="loading"
            :data="list"
            @sort-change='tableSortChange'
            style="width: 100%;">

            <el-table-column
                label="index"
                type="index"
                width="100"

                >
            </el-table-column>

            <el-table-column
                label="课程"
                prop="typeName"
                sortable='custom'
                >
            </el-table-column>

            <el-table-column
                label="ID"
                prop="id"
                sortable='custom'
                >
            </el-table-column>

            <el-table-column
                label="score"
                prop="score"
                with="300"
                sortable='custom'
                :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column
                label="en"
                sortable='custom'
                prop="en">
                <template slot-scope="scope">
                    <p v-if="scope.row.status==3" class="show-en en-red" @click="sound(scope.row)" > {{scope.row.en}} </p>
                    <p v-if="scope.row.status!=3" class="show-en"  @click="sound(scope.row)"> {{scope.row.en}} </p>
                </template>

            </el-table-column>

            <el-table-column
                label="cn"
                prop="cn"
                with="350"
                sortable='custom'
            >

                <template slot-scope="scope">

                    <span class="show-cn">
                        <p @click="showCn($event,scope.row.cn,scope.row)" v-if="scope.row.showCn==0" data-show-status="0" class="show-cn-none">&nbsp;</p>

                        <p @click="showCn($event,scope.row.cn,scope.row)" v-if="scope.row.showCn==1" data-show-status="0" class="show-cn">{{scope.row.cn}}

                        </p>
                    </span>

                </template>
            </el-table-column>

            <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
                <template slot-scope="{row,$index}">

                    <el-button v-if="row.status==1 && row.score > 0" size="mini" type="success" @click="setY(row,'yes')">
                        认识
                    </el-button>

                    <el-button v-if="row.status==2 || row.score <= 0" size="mini" @click="setY(row,'no')">
                        认识
                    </el-button>


                    <el-button v-if="row.status==1" size="mini" type="success" @click="setN(row,'yes')">
                        不认识
                    </el-button>

                    <el-button v-if="row.status==3" size="mini" @click="setN(row,'no')">
                        不认识
                    </el-button>


                </template>
            </el-table-column>

            <el-table-column
                label="viewCount"
                sortable='custom'
                prop="viewCount">
            </el-table-column>

            <el-table-column
                label="Search"
                prop="">

                <template slot-scope="scope">

                    <!--<a :href ="'https://fanyi.baidu.com/?aldtype=16047#en/zh/'+scope.row.en" target="_blank" >-->
                        <!--{{scope.row.en}}-->
                    <!--</a>-->

                    <el-button type="text" size="small" @click.native="translate(scope.row)">详情</el-button>

                </template>

            </el-table-column>

            <el-table-column
                label="操作"
            >
                <template slot-scope="scope">
                    <el-button v-if="$store.getters.authRules.includes('admin')" type="text" size="small" @click.native="handleForm(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="text" size="small" @click.native="handleDelete(scope.row,scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            :page-size="query.limit"
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="total">
        </el-pagination>


        <el-dialog  :visible.sync="dialogFormVisible">
            <el-form ref="dataForm" :rules="formRules" label-position="left" label-width="150px" style="width: 400px; margin-left:50px;">
                <el-form-item label="English">
                    <el-input v-model="temp.en" :autosize="{ minRows: 2, maxRows: 4}" placeholder="Please input" />
                </el-form-item>
                <el-form-item label="Chinease">
                    <el-input v-model="temp.cn" :autosize="{ minRows: 2, maxRows: 4}" type="textarea" placeholder="Please input" />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">
                    Cancel
                </el-button>
                <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
                    Confirm
                </el-button>
            </div>
        </el-dialog>




        <el-dialog  :visible.sync="dialogFormSearch">
            <el-form ref="dataForm" :rules="formRules" label-position="left">

                <el-form-item label="English">
                    <!--el-input v-model="tempForSearch.en" :autosize="{ minRows: 2, maxRows: 4}"  /-->
                    <br/>
                    <a :href ="'https://fanyi.baidu.com/?aldtype=16047#en/zh/'+tempForSearch.en" target="_blank" >
                        &nbsp;&nbsp;&nbsp;&nbsp;{{tempForSearch.en}}
                    </a>
                </el-form-item>
                <el-form-item label="Chinease">
                    <el-input v-model="tempForSearch.cn" :autosize="{ minRows: 2, maxRows: 4}" type="textarea" readonly="readonly" />
                </el-form-item>

            </el-form>
        </el-dialog>


    </div>

</template>

<script>
import { wordList, setY,setN,setV,setD,translate,wordListType,updateWord } from "../../api/word/wordList";
import {BASE_URL} from "../../config/app";

const formJson = {
    adId: "",
    title: "",
    describe: "",
    pic: "",
    picUrl: "",
    jumpType: "",
    jumpUrl: "",
    iosUrl: "",
    androidUrl: "",
    wxaAppid: "",
    channelType: 0,
    channelList: [],
    androidVersionType: 0,
    androidVersionList: [],
    iosVersionType: 0,
    iosVersionList: [],
    newShowStartNum: 0,
    newShowMaxNum: 0,
    oldShowStartNum: 0,
    oldShowMaxNum: 0,
    endTime: "",
    eventName: "",
    status: 1
};
export default {
    data() {
        return {
            query: {
                word:"",
                type:"",
                title: "",
                page: 1,
                limit: 20
            },
            channelListInput: "",
            androidVersionListInput: "",
            iosVersionListInput: "",
            dialogFormVisible:false,
            dialogFormSearch:false,
            dialogStatus: "update",
            tempForSearch:{
                en:"",
                cn:""
            },
            list: [],
            types:[],
            total: 0,
            loading: true,
            index: null,
            formName: null,
            formMap: {
                add: "新增",
                edit: "编辑"
            },
            formLoading: false,
            formVisible: false,
            formData: formJson,
            temp: {
                en:"",
                cn:"",
                id:""
            },
            formRules: {
                title: [
                    {
                        required: true,
                        message: "请输入广告标题",
                        trigger: "blur"
                    }
                ]
            },
            deleteLoading: false
        };
    },
    components: {
    },
    methods: {

        translate(row){
            translate(row.en)
                .then(response => {
                    this.dialogFormSearch = true;
                    this.tempForSearch.en = row.en;
                    this.tempForSearch.cn = response;
                    console.log(this.tempForSearch);
                })
                .catch(() => {
                    this.loading = false;
                    this.list = [];
                    this.total = 0;
                });

        },
        sound(row){

            this.audio = new Audio();
            this.audio.src = BASE_URL+"/say?en="+row.en;
            let playPromise;
            playPromise = this.audio.play();
            if (playPromise) {
                playPromise.then(() => {
                }).catch((e) => {
                    // 音频加载失败
                    console.error(e);
                });
            }
        },

        handleDelete(row, index) {
            var returnType = "操作失败";
            var returnMessage = "error";

            this.$confirm("确认删除该记录吗?", "提示", {
                type: "warning"
            })
                .then(() => {
                setD(row.id)
                    .then(response => {
                        if(response == "success"){
                            returnType = "操作成功";
                            returnMessage = "success";
                            this.list.splice(index, 1);
                        }
                        this.$notify({
                            title: returnType,
                            message: 'Delete '+returnMessage,
                            type: 'success',
                            duration: 2000
                        });
                    })
                    .catch(() => {
                        this.loading = false;
                        this.list = [];
                        this.total = 0;
                        this.deleteLoading = false;
                    });

                })
                .catch(() => {
                    this.$message.info("取消删除");
                });
        },

        setV(row){
            row.showCn = 1;
            setV(row.id);
            if(row.showCn == 0){
                row.viewCount++;
            }

        },

        setN(row,s) {
            var returnType = "操作失败";
            var returnMessage = "error";
            if(s == "yes"){
                row.status = 3;
                 setN(row.id)
                    .then(response => {
                        console.log(response);

                        if(response == "success"){
                            returnType = "操作成功";
                            returnMessage = "success";
                            row.score++;
                            this.setV(row);
                        }

                        this.$message({
                            message: returnType,
                            type: returnMessage
                        })
                    })
                    .catch(() => {
                        this.loading = false;
                        this.list = [];
                        this.total = 0;
                    });

            }
        },
        setY(row,s) {
            var returnType = "操作失败";
            var returnMessage = "error";
            if(s == "yes"){
                row.status = 2;
                setY(row.id)
                    .then(response => {
                        if(response == "success"){
                            returnType = "操作成功";
                            returnMessage = "success";
                            row.score--;
                            this.setV(row);

                        }
                        this.$message({
                            message: returnType,
                            type: returnMessage
                        })
                    })
                    .catch(() => {
                        this.loading = false;
                        this.list = [];
                        this.total = 0;
                    });

            }


        },



        updateData(){

            var returnType = "操作失败";
            var returnMessage = "error";

            var en= this.temp.en;
            var cn= this.temp.cn;
            var id= this.temp.id;
            updateWord(id,en,cn)
                .then(response => {
                    console.log(response);
                    if(response.data == "success") {
                        returnType = "操作成功";
                        returnMessage = "success";
                        this.dialogFormVisible = false;
                    }
                    this.getList()
                    this.$message({
                        message: returnType,
                        type: returnMessage
                    })
                })
                .catch(() => {
                    this.loading = false;
                });
        },

        tableSortChange(column) {


            this.query.orderProp=column.prop;
            this.query.orderType=column.order;


            // this.query = {
            //     word: this.query.word,
            //     page: 1,
            //     limit: 20,
            //     orderProp:column.prop,
            //     orderType:column.order
            // };

            this.getList()
        },
        showCn(e,d,row){

            if(row.showCn == 1){
                row.showCn = 0;

            }else{
                // row.showCn = 1;
                // setV(row.id);
                // row.viewCount++;

                this.setV(row);
            }

            //var showStatus = e.target.dataset.showStatus;
            // if(showStatus == 0 ){
            //     console.log(e);
            //     e.srcElement.className="";
            //     e.target.innerText = d;
            //     e.target.dataset.showStatus = 1 ;
            //     setV(row.id);
            //     row.viewCount++;
            //
            // }else{
            //     e.target.innerText = ".";
            //     e.target.dataset.showStatus = 0 ;
            //     e.srcElement.className="show-cn-none";
            // }
        },


        onReset() {
            this.$router.push({
                path: ""
            });
            this.query = {
                word: "",
                page: 1,
                limit: 20
            };
            this.getList();
        },
        onSubmit() {
            this.query.page = 1
            this.$router.push({
                path: "",
                query: this.query
            });
            this.getList();
        },
        handleSizeChange(val) {
            this.query.limit = val;
            this.getList();
        },
        handleCurrentChange(val) {
            this.query.page = val;
            this.getList();
        },
        getList() {
            this.loading = true;
            var dataLists = new Array();
            wordList(this.query)
                .then(response => {
                    this.loading = false;
                    response.data.list.forEach(function(value,index){
                        value['showCn']=0;
                        dataLists[index] = value;
                    });
                    this.list = dataLists;
                   // this.list = response.data.list || [];
                    this.total = response.data.total || 0;
                })
                .catch(() => {
                    this.loading = false;
                    this.list = [];
                    this.total = 0;
                });
        },

        getTypes() {
            wordListType()
                .then(response => {
                    this.types = response.data;
                })
                .catch(() => {
                    this.loading = false;
                    this.list = [];
                    this.total = 0;
                });
        },
        // 显示表单
        handleForm(index, row) {
            this.dialogFormVisible = true;
            this.temp.cn = row.cn;
            this.temp.en = row.en;
            this.temp.id = row.id;

            // 刷新表单
            this.resetForm();
            this.formData = JSON.parse(JSON.stringify(formJson));
            if (row !== null) {
                this.formData = Object.assign({}, row);
            }
            this.formName = "add";
            if (index !== null) {
                this.index = index;
                this.formName = "edit";
            }
        },
    },
    filters: {
        statusFilterType(status) {
            const statusMap = {
                0: "gray",
                1: "success"
            };
            return statusMap[status];
        },
        statusFilterName(status) {
            const statusMap = {
                0: "禁用",
                1: "正常"
            };
            return statusMap[status];
        }
    },
    mounted() {},
    created() {
        // 将参数拷贝进查询对象
        let query = this.$route.query;
        this.query = Object.assign(this.query, query);
        this.query.limit = parseInt(this.query.limit);
        // 加载表格数据
        this.getList();

        this.getTypes();
    }
};



</script>

<style type="text/scss" lang="scss">
    .show-en,.show-cn{
        cursor:pointer;
    }
    .show-cn-none{
        background: #b0b3b5;
    }
    .en-red{
        color:red;
    }
</style>
